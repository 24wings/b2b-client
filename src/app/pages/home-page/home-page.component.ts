import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../lib';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  address: City = { code: '', name: "" }
  constructor(public config: ConfigService) { this.findAddress(); }

  ngOnInit() {
  }

  async findAddress() {
    let address = await this.config.api.ipAddress()
    this.address = { name: address.data.city, code: address.data.city_id };
  }
  /**根据城市加载对应的推荐内容 */
  async listInformationByAddress() {

  }


  async selectCity(city: City) {
    this.address = city;
    await this.listInformationByAddress();
  }


} 
