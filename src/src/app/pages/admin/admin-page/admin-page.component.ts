import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../../lib';
@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {

  constructor(public config: ConfigService) {
    if (!this.config.admin) {
      this.config.router.navigateByUrl('/admin/login');
    }
  }

  ngOnInit() {
  }


}
