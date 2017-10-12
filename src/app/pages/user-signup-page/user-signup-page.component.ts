import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../lib';
@Component({
  selector: 'app-user-signup-page',
  templateUrl: './user-signup-page.component.html',
  styleUrls: ['./user-signup-page.component.scss']
})
export class UserSignupPageComponent implements OnInit {
  phone: string = '';
  password: string = '';
  authCode: string = '';
  looptime: number = 0;
  // 同意协议
  checked: boolean = false;
  constructor(public config: ConfigService) { }

  ngOnInit() {
  }

  async signup() {
    if (this.checkParams()) {
      let user = await this.config.db.user.findOne({ phone: this.phone });
      if (user) {
        alert('该手机号已经被注册');
      } else {
        let newUser = await this.config.db.user.createOne({ phone: this.phone, password: this.password });
        this.config.user = newUser;
        this.config.router.navigateByUrl('/user');
      }


    } else {
      alert('请完善信息');
    }
  }

  checkParams(): boolean {
    if (this.password.length < 6) {
      alert('密码长度不小于6位数')
      return false;
    } else {
      return /^1[3-9]\d{9}$/g.test(this.phone) && this.checked && !!this.authCode && !!this.phone && !!this.password;
    }

  }

  async sendAuthcode() {
    if (/^1[3-9]\d{9}$/g.test(this.phone)) {
      await this.config.api.getAuthCode(this.phone);
      this.looptime = 60;
      this.loop();

    } else {
      alert('请输入正确的手机号')
    }

  }

  loop() {
    let timmer = setInterval(() => {
      if (this.looptime > 0) {
        this.looptime--;
      } else {
        clearInterval(timmer);
      }
    }, 1000)
  }


}
