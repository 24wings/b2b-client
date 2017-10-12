import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../../lib';
@Component({
  selector: 'app-admin-login-page',
  templateUrl: './admin-login-page.component.html',
  styleUrls: ['./admin-login-page.component.scss']
})
export class AdminLoginPageComponent implements OnInit {
  username: string;
  password: string;
  remeberMe: boolean = false;

  login() {
    if (this.username == 'moon' && this.password == 'moon') {
      this.config.admin = { username: this.username, password: this.password, isLocalStorage: this.remeberMe };
      this.config.router.navigateByUrl('/admin');
    } else {
      alert('用户名密码错误')
    }
  }

  constructor(public config: ConfigService) { }

  ngOnInit() {
  }

}
