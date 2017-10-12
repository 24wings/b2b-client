import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../../lib';
@Component({
  selector: 'app-return-product-address-page',
  templateUrl: './return-product-address-page.component.html',
  styleUrls: ['./return-product-address-page.component.scss']
})
export class ReturnProductAddressPageComponent implements OnInit {
  returnProductAddress: ReturnProductAddress = {
    name: '',
    phone: '',
    postalCode: '',
    region: { code: '', name: '' },
    city: { code: '', name: '' },
    town: { code: '', name: '' },
    detailAddress: ''
  };

  constructor(public config: ConfigService) {
    this.loadReturnProductAddress();

  }

  ngOnInit() {
  }

  async loadReturnProductAddress() {


    let returnProductAddress = await this.config.db.returnProductAddress.findOne({ shopkeeper: this.config.shopkeeper });
    if (returnProductAddress) { this.returnProductAddress = returnProductAddress };


  }

  async modifyReturnProductAddress() {
    if (this.checkParams()) {
      let address = await this.config.db.returnProductAddress.findOne({ shopkeeper: this.config.shopkeeper });
      if (address) {
        this.config.db.returnProductAddress.update({ shopkeeper: this.config.shopkeeper._id }, this.returnProductAddress)
      } else {
        this.returnProductAddress.shopkeeper = <any>this.config.shopkeeper._id;
        let newAddress = await this.config.db.returnProductAddress.createOne(this.returnProductAddress);


      }

      this.config.location.back();
    }

  }

  checkParams(): boolean {
    let validatation = true;
    if (!this.returnProductAddress.name) {
      alert('发货人姓名不能为空');
      return false;
    }
    if (!this.returnProductAddress.postalCode || !this.returnProductAddress.phone || /^1[3-9]\d{9}&/g.test(this.returnProductAddress.phone)) {
      alert('手机号或邮政编码不能为空');
      return false;
    }

    if (!this.returnProductAddress.region.code || !this.returnProductAddress.city.code || !this.returnProductAddress.town.code) {
      alert('请选择发货地址');
      return false;
    }
    if (!this.returnProductAddress.detailAddress) {
      alert('请完善详细地址');
      return false;
    }



    return validatation;
  }

}
