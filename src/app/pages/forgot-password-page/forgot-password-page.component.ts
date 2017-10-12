import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../lib';
@Component({
  selector: 'app-forgot-password-page',
  templateUrl: './forgot-password-page.component.html',
  styleUrls: ['./forgot-password-page.component.scss']
})
export class ForgotPasswordPageComponent implements OnInit {
  phone: string = '';
  password: string = '';
  repassword: string = '';
  looptime: number = 0;
  authCode: string = '';


  constructor(public config: ConfigService) { }

  ngOnInit() {
  }
  async sendAuthcode() {
    if (/^1[3-9]\d{9}$/g.test(this.phone)) {
      await this.config.api.getAuthCode(this.phone);
      this.looptime = 60;
      this.loop();

    } else {
      alert('手机号不合法');
    }

  }

  loop() {
    let timmer = setInterval(() => { this.looptime > 0 ? this.looptime-- : clearInterval(timmer); }, 1000)

  }



  async forgotPassword() {
    if (this.password == this.repassword && !!this.password && /^1[3-9]\d{9}$/.test(this.phone) && this.authCode) {
      let validation = await this.config.api.checkAuthCode(this.phone, this.authCode);
      if (validation) {
        await this.config.db.user.update({ phone: this.phone }, { password: this.password });
        window.confirm('修改密码成功');
        this.config.router.navigateByUrl('/user');
      } else {
        alert('验证码错误');
      }
    } else {
      alert('请完善信息')
    }
  }

}
