import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../../lib';
@Component({
  selector: 'app-modify-password-page',
  templateUrl: './modify-password-page.component.html',
  styleUrls: ['./modify-password-page.component.scss']
})
export class ModifyPasswordPageComponent implements OnInit {
  oldPassword: string = '';
  newPassword: string = '';
  constructor(public config: ConfigService) { }

  ngOnInit() {
  }

  async changePassword() {
    let correct = this.config.user.password == this.oldPassword;
    if (correct) {
      if (this.newPassword.length < 6) {
        alert('密码过短');
      } else {
        await this.config.db.user.updateById(this.config.user._id, { password: this.newPassword });
        await this.config.syncUser();
        this.config.location.back();
      }
    } else {
      alert('密码错误');
    }


  }





}
