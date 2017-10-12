import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../../lib';
@Component({
  selector: 'app-user-setting-page',
  templateUrl: './user-setting-page.component.html',
  styleUrls: ['./user-setting-page.component.scss']
})
export class UserSettingPageComponent implements OnInit {
  user: User;
  constructor(public config: ConfigService) { this.user = this.config.user; }

  ngOnInit() {
  }
  logout() {
    localStorage.clear();
    this.config.router.navigateByUrl('/login');
  }

}
