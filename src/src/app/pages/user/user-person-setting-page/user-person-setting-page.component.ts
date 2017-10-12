import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../../lib';
enum View {
  List,
  ModifyNickname,

}

@Component({
  selector: 'app-user-person-setting-page',
  templateUrl: './user-person-setting-page.component.html',
  styleUrls: ['./user-person-setting-page.component.scss']
})
export class UserPersonSettingPageComponent implements OnInit {
  View = View;
  state: View = View.List;
  SelectingSex: boolean = false;
  user: User;
  constructor(public config: ConfigService) { this.user = this.config.user; }

  ngOnInit() {
  }

  async updateAvatar() {
    let base64 = await this.config.common.selectFile();
    let compressBase64 = await this.config.common.compressBase64(base64, 2000000);
    let url = await this.config.api.uploadBase64(compressBase64);
    this.user.avatar = url;
    await this.config.db.user.updateById(this.user._id, { avatar: url });
    await this.config.syncUser();
  }

  async modifyUsername() {
    await this.config.db.user.updateById(this.user._id, { nickname: this.user.nickname });
    this.user = await this.config.syncUser();
    this.state = View.List;
  }
  async modifySex() {
    await this.config.db.user.updateById(this.user._id, { sex: this.user.sex });
    this.user = await this.config.syncUser();
    this.state = View.List;
    this.SelectingSex = false;
  }
}
