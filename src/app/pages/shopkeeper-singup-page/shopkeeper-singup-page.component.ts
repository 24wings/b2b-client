import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../lib';
@Component({
  selector: 'app-shopkeeper-singup-page',
  templateUrl: './shopkeeper-singup-page.component.html',
  styleUrls: ['./shopkeeper-singup-page.component.scss']
})
export class ShopkeeperSingupPageComponent implements OnInit {
  shopkeeper: Shopkeeper = {
    nickname: '',
    phone: '',
    password: '',
    shopName: '',

    detailAddress: ''
  }
  authCode: string = '';
  repassword: string = '';
  looptime: number = 0;

  constructor(public config: ConfigService) { }

  ngOnInit() {
  }

  async sendAuthoCode() {
    if (/^1[3-9]\d{9}$/.test(this.shopkeeper.phone)) {
      await this.config.api.getAuthCode(this.shopkeeper.phone);
      this.looptime = 60;
      this.loop();
    } else {
      alert('手机号不合法');
    }
  }

  loop() {
    let timmer = setInterval(() => { this.looptime > 0 ? this.looptime-- : clearInterval(timmer) }, 1000);
  }

  async signup() {
    if (this.checkParams()) {
      let shopkeeper = await this.config.db.shopkeeper.findOne({ phone: this.shopkeeper.phone });
      if (shopkeeper) {
        alert('该手机号已经入驻商家')
      } else {
        let validation = await this.config.api.checkAuthCode(this.shopkeeper.phone, this.authCode);
        if (validation) {
          let newShopkeeper = await this.config.db.shopkeeper.createOne(this.shopkeeper);
          this.config.shopkeeper = newShopkeeper;
          this.config.router.navigateByUrl('/shopkeeper');
        } else {
          alert('验证码错误');
        }

      }

    }
  }

  checkParams(): boolean {
    let validation = true;
    if (!this.authCode) {
      alert('请输入验证码');
      return false;
    }

    if (this.repassword != this.shopkeeper.password) {
      alert('两次密码不一致');
      return false;
    }
    if (this.shopkeeper.password.length < 6) {
      alert('密码必须不小于六位数')
      return false;
    }

    if (!this.shopkeeper.companyAddress || !this.shopkeeper.detailAddress || !this.shopkeeper.shopName) {
      alert('信息不完善');
      return false;
    }



    return validation;
  }

}
