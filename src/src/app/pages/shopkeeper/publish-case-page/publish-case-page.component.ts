import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../../lib';
@Component({
  selector: 'app-publish-case-page',
  templateUrl: './publish-case-page.component.html',
  styleUrls: ['./publish-case-page.component.scss']
})
export class PublishCasePageComponent implements OnInit {
  newCase: Case = {
    title: '',
    content: '',
    images: []
  };
  constructor(public config: ConfigService) { }

  ngOnInit() {
  }

  async addImage() {
    // 长度限制最多上传4张图片
    if (this.newCase.images.length < 4) {
      let base64 = await this.config.common.selectFile();
      let compressBase64 = await this.config.common.compressBase64(base64, 2000000);
      let url = await this.config.api.uploadBase64(compressBase64);
      this.newCase.images.push(url);
    }
  }

  checkParams(): boolean {
    let validation = true;
    if (!this.newCase.title) {
      alert('请输入标题'); return false;
    }


    return validation;

  }

  async submit() {
    if (this.checkParams()) {
      let newCase4 = await this.config.db.case.createOne(this.newCase);
      this.config.router.navigateByUrl('/shopkeeper');
    }
  }


}
