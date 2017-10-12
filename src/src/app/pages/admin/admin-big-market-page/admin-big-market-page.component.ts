import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../../lib';

enum View {
  List,
  AddBigMarket

}
@Component({
  selector: 'app-admin-big-market-page',
  templateUrl: './admin-big-market-page.component.html',
  styleUrls: ['./admin-big-market-page.component.scss']
})
export class AdminBigMarketPageComponent implements OnInit {
  View = View;
  state: View = View.List
  selectedAddress: City;
  bigMarkets: BigMarket[] = [];
  newBigMarket: BigMarket = { region: { code: '', name: '' }, city: { code: '', name: '' }, name: '', shopkeepers: [] };
  shopkeepers: Shopkeeper[] = [];
  constructor(public config: ConfigService) { }

  ngOnInit() {
  }

  async selectCity(city: City) {
    this.selectedAddress = city;
    this.bigMarkets = await this.config.db.bigMarket.find({ city: { code: this.selectedAddress.code, name: this.selectedAddress.name } });


  }

  async listCityShopkeepers(city: City) {
    this.shopkeepers = await this.config.db.shopkeeper.find({ city: { code: city.code, name: city.name } });
  }

  addShopkeeper(shopkeeper: Shopkeeper, i: number) {

    this.newBigMarket.shopkeepers.push(shopkeeper);

    this.shopkeepers.splice(i, 1);

  }

  removeShopkeeper(shopkeeper, i) {
    this.newBigMarket.shopkeepers.splice(i, 1);
    this.shopkeepers.push(shopkeeper);

  }

  async createNewBigMarket() {
    if (this.checkBigMarket(this.newBigMarket)) {
      this.state = View.List;

      delete this.newBigMarket.region.children;
      delete this.newBigMarket.city.children;
      this.newBigMarket.shopkeepers = <any>this.newBigMarket.shopkeepers.map(shopkeeper => shopkeeper._id);
      await this.config.db.bigMarket.createOne(this.newBigMarket);

    }

  }

  checkBigMarket(bigMarket: BigMarket): boolean {
    let ok = true;
    if (!bigMarket.name) { alert('名称未填写'); return false; };
    if (!bigMarket.city.name) { alert('尚未选择城市'); return false; }

    return ok;
  }

}
