import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../../lib';
@Component({
  selector: 'app-company-auth-page',
  templateUrl: './company-auth-page.component.html',
  styleUrls: ['./company-auth-page.component.scss']
})
export class CompanyAuthPageComponent implements OnInit {
  shopkeeper: Shopkeeper;
  constructor(public config: ConfigService) { this.shopkeeper = this.config.shopkeeper }

  ngOnInit() {
  }
  // 添加企业营业执照
  async addLicense() {
    if (!this.shopkeeper.license) {
      this.shopkeeper.license = [];
    }
    let base64 = await this.config.common.selectFile();
    let compressBase64 = await this.config.common.compressBase64(base64);
    let url = await this.config.api.uploadBase64(compressBase64);
    this.shopkeeper.license.push(url);

  }

  async submit() {
    await this.config.db.shopkeeper.update({ _id: this.shopkeeper._id },
      {
        license: this.shopkeeper.license,
        legalPersonId: this.shopkeeper.legalPersonId,
        organizationCode: this.shopkeeper.organizationCode
      });
    this.config.router.navigateByUrl('/shopkeeper');
  }


}
