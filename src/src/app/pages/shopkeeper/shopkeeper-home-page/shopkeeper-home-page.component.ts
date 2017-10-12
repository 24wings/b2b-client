import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../../lib';
@Component({
  selector: 'app-shopkeeper-home-page',
  templateUrl: './shopkeeper-home-page.component.html',
  styleUrls: ['./shopkeeper-home-page.component.scss']
})
export class ShopkeeperHomePageComponent implements OnInit {
  shopkeeper: Shopkeeper;
  constructor(public config: ConfigService) {
    this.shopkeeper = this.config.shopkeeper;
    this.syncShopkeeper();
  }

  ngOnInit() {
  }

  async syncShopkeeper() {
    this.shopkeeper = await this.config.syncShopkeeper()
  }


}
