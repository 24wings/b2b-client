import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../../lib';

enum View {
  List,
  CreatingAddress,
  EditAddress
}

@Component({
  selector: 'app-user-recive-address-page',
  templateUrl: './user-recive-address-page.component.html',
  styleUrls: ['./user-recive-address-page.component.scss']
})
export class UserReciveAddressPageComponent implements OnInit {
  View = View;
  state: View = this.View.List;
  user: User;
  reciveAddresses: ReciveAddress[] = [];
  selectedAddress: ReciveAddress;
  newReciveAddress: ReciveAddress = {
    contactPhone: '',
    recivename: '',
    region: { code: '', name: '' },
    city: { code: '', name: '' },
    town: { code: '', name: '' },
    detailAddress: ''
  }
  constructor(public config: ConfigService) { this.user = this.config.user; this.listUserReciveAddress() }

  ngOnInit() {
  }
  async listUserReciveAddress() {
    this.reciveAddresses = await this.config.db.reciveAddress.find({ user: this.user._id });
  }
  async deleteReciveAddress(reciveAddress: ReciveAddress) {
    let ok = window.confirm('确定要删除该地址吗?');
    if (ok) {
      await this.config.db.reciveAddress.removeById(reciveAddress._id);
      await this.listUserReciveAddress();
    }
  }
  /**当添加地址后会作为默认的收获地址 */
  async addReciveAddress() {
    if (this.checknewReciveAddress(this.newReciveAddress)) {
      this.newReciveAddress.user = <any>this.config.user._id;
      let newReciveAddress = await this.config.db.reciveAddress.createOne(this.newReciveAddress);
      this.config.db.user.updateById(this.config.user._id, { reciveAddress: newReciveAddress._id });
      this.user = await this.config.syncUser();
      this.state = this.View.List;
      await this.listUserReciveAddress();
    }

  }
  async setUserDefaultReciveAddress(address: ReciveAddress) {
    await this.config.db.user.updateById(this.config.user._id, { reciveAddress: address._id });
    this.user = await this.config.syncUser();

  }

  checknewReciveAddress(address: ReciveAddress): boolean {
    let result = true;
    if (!address.contactPhone || !/^1[3-9]\d{9}$/.test(address.contactPhone)) {
      alert('非法的手机号'); return false;
    }
    if (!address.recivename) {
      alert('请输入联系人姓名'); return false;
    }
    if (!address.region.name || !address.city.name || !address.town.name) {
      alert('请选择地区'); return false;
    }
    return result;
  }

  async editReciveAddress() {
    if (this.checknewReciveAddress(this.selectedAddress)) {
      await this.config.db.reciveAddress.updateById(this.selectedAddress._id, this.selectedAddress);
      this.state = this.View.List;
    }
  }
}
