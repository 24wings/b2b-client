import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../../lib';

enum View {
  List,
  Setting,
  CreateSetting
}

@Component({
  selector: 'app-shopkeeper-transfer-setting-page',
  templateUrl: './shopkeeper-transfer-setting-page.component.html',
  styleUrls: ['./shopkeeper-transfer-setting-page.component.scss']
})
export class ShopkeeperTransferSettingPageComponent implements OnInit {
  View = View;
  state: View = View.List;
  transfers: Transfer[] = [];
  sendAreas: SendArea[] = [];
  selectedTransfer: Transfer;
  selectedRegion: City;
  newSendArea: SendArea = { areaname: '', areas: [] }
  constructor(public config: ConfigService) {
    this.listTransfer();
  }

  ngOnInit() {
  }
  async listTransfer() {
    this.transfers = await this.config.db.transfer.find();
  }
  async selectTransfer(transfer: Transfer) {
    this.selectedTransfer = transfer;
    this.state = View.Setting;
    await this.listSendArea()
  }
  async listSendArea() {
    this.sendAreas = await this.config.db.sendArea.find({ transfer: this.selectedTransfer._id, shopkeeper: this.config.shopkeeper._id });
  }

  addProductTransferAddress(city: City) {
    if (!this.newSendArea.areas.some(area => area.city.code == city.code)) {
      this.newSendArea.areas.push({ region: this.selectedRegion, city });
    }
  }

  removeSendAreaCity(city: City) {
    let area = this.newSendArea.areas.find(area => area.city.code == city.code);
    let index = this.newSendArea.areas.indexOf(area);
    this.newSendArea.areas.splice(index, 1);
  }
  selectTransferRegion(city: City) {
    this.selectedRegion = city;
  }

  async submitSendArea() {
    this.newSendArea.shopkeeper = <any>this.config.shopkeeper._id;
    this.newSendArea.transfer = <any>this.selectedTransfer._id
    let newSendarea = await this.config.db.sendArea.createOne(this.newSendArea);
    this.state = View.Setting;
    await this.listSendArea();
  }

}
