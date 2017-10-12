import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../lib';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  phone: string = '';
  password: string = '';
  constructor(public config: ConfigService) { }

  ngOnInit() {
  }

  async login() {
    let user = await this.config.db.user.findOne({ phone: this.phone, password: this.password });
    if (user) {
      this.config.user = user;
      this.config.router.navigateByUrl('/user');
      return;
    }
    let shopkeeper = await this.config.db.shopkeeper.findOne({ phone: this.phone, password: this.password });
    if (shopkeeper) {
      this.config.shopkeeper = shopkeeper;
      this.config.router.navigateByUrl('/shopkeeper');
      return;
    }
    alert('用户名或密码错误');

  }

}
