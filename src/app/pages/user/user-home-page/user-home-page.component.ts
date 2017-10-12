import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../../lib';
@Component({
  selector: 'app-user-home-page',
  templateUrl: './user-home-page.component.html',
  styleUrls: ['./user-home-page.component.scss']
})
export class UserHomePageComponent implements OnInit {
  user: User;
  constructor(public config: ConfigService) {
    this.user = this.config.user;
  }

  ngOnInit() {
  }


}
