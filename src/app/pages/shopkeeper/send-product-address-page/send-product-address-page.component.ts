import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../../lib';

@Component({
  selector: 'app-send-product-address-page',
  templateUrl: './send-product-address-page.component.html',
  styleUrls: ['./send-product-address-page.component.scss']
})
export class SendProductAddressPageComponent implements OnInit {
  sendProductAddress: SendProductAddress = {
    name: '',
    phone: '',
    postalCode: '',
    region: { code: '', name: '' },
    city: { code: '', name: '' },
    town: { code: '', name: '' },
    detailAddress: ''
  };

  constructor(public config: ConfigService) {
    this.loadSendProductAddress();

  }

  ngOnInit() {
  }

  async loadSendProductAddress() {


    let sendProductAddress = await this.config.db.sendProductAddress.findOne({ shopkeeper: this.config.shopkeeper });
    if (sendProductAddress) { this.sendProductAddress = sendProductAddress };


  }

  async modifySendProductAddress() {
    if (this.checkParams()) {
      let address = await this.config.db.sendProductAddress.findOne({ shopkeeper: this.config.shopkeeper });
      if (address) {
        this.config.db.sendProductAddress.update({ shopkeeper: this.config.shopkeeper._id }, this.sendProductAddress)
      } else {
        this.sendProductAddress.shopkeeper = <any>this.config.shopkeeper._id;
        let newAddress = await this.config.db.sendProductAddress.createOne(this.sendProductAddress);


      }

      this.config.location.back();
    }

  }

  checkParams(): boolean {
    let validatation = true;
    if (!this.sendProductAddress.name) {
      alert('发货人姓名不能为空');
      return false;
    }
    if (!this.sendProductAddress.postalCode || !this.sendProductAddress.phone || /^1[3-9]\d{9}&/g.test(this.sendProductAddress.phone)) {
      alert('手机号或邮政编码不能为空');
      return false;
    }

    if (!this.sendProductAddress.region.code || !this.sendProductAddress.city.code || !this.sendProductAddress.town.code) {
      alert('请选择发货地址');
      return false;
    }
    if (!this.sendProductAddress.detailAddress) {
      alert('请完善详细地址');
      return false;
    }



    return validatation;
  }
}
