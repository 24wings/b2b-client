import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../../lib';
enum View {
  List,
  Create
}

@Component({
  selector: 'app-admin-transfer-setting-page',
  templateUrl: './admin-transfer-setting-page.component.html',
  styleUrls: ['./admin-transfer-setting-page.component.scss']
})
export class AdminTransferSettingPageComponent implements OnInit {
  View = View;
  state = View.List;
  newTransfer: Transfer = { name: '', logo: '', sort: 0 };
  sendAreas: SendArea[] = [];


  tansfers: Transfer[] = [];
  constructor(public config: ConfigService) {
    this.listTransfers();
  }

  ngOnInit() {
  }

  async changeLogo() {
    let base64 = await this.config.common.selectFile();
    let url = await this.config.api.uploadBase64(base64);
    this.newTransfer.logo = url;
  }

  async listTransfers() {
    this.tansfers = await this.config.db.transfer.find();
  }

  async addTransfer() {
    if (this.checkTransfer(this.newTransfer)) {
      let newTransfer = await this.config.db.transfer.createOne(this.newTransfer);
      this.state = this.View.List;
      await this.listTransfers();
    } else {
      alert('请完善信息');
    }
  }

  checkTransfer(transfer: Transfer): boolean {
    return !!transfer.name && !!transfer.logo && !!transfer.sort;
  }


}
