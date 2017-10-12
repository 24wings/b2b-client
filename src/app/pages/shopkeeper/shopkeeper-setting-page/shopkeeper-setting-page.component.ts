import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../../lib';
@Component({
  selector: 'app-shopkeeper-setting-page',
  templateUrl: './shopkeeper-setting-page.component.html',
  styleUrls: ['./shopkeeper-setting-page.component.scss']
})
export class ShopkeeperSettingPageComponent implements OnInit {
  shopkeeper: Shopkeeper;
  returnProductAddress: ReturnProductAddress;
  sendProductAddress: SendProductAddress;
  constructor(public config: ConfigService) {
    this.shopkeeper = this.config.shopkeeper;
  }

  async ngOnInit() {
    this.sendProductAddress = await this.config.db.sendProductAddress.findOne({ shopkeeper: this.shopkeeper._id });
    this.returnProductAddress = await this.config.db.returnProductAddress.findOne({ shopkeeper: this.shopkeeper._id });
  }
  logout() {
    this.config.shopkeeper = null;
    this.config.router.navigateByUrl('/login');
  }

  async changeAvatar() {
    let base64 = await this.config.common.selectFile();
    let compressBase64 = await this.config.common.compressBase64(base64, 200000);
    let url = await this.config.api.uploadBase64(compressBase64);
    await this.config.db.shopkeeper.update({ _id: this.config.shopkeeper._id }, { avatar: url });
    this.shopkeeper = await this.config.syncShopkeeper();

  }

  async confirmModify() {
    await this.config.db.shopkeeper.update({ _id: this.shopkeeper._id },
      {
        shopName: this.shopkeeper.shopName,
        summary: this.shopkeeper.summary,
        contactPhone: this.shopkeeper.contactPhone,
        weixin: this.shopkeeper.weixin,
        qq: this.shopkeeper.qq,
        background: this.shopkeeper.background
      });
    this.config.shopkeeper = await this.config.syncShopkeeper();
    this.config.location.back();
  }

  async changeBackground() {
    let base64 = await this.config.common.selectFile();
    let compressBase64 = await this.config.common.compressBase64(base64, 2000000);
    this.shopkeeper.background = await this.config.api.uploadBase64(compressBase64);
  }

}
