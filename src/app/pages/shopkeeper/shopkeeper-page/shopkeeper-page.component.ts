import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../../lib';
@Component({
  selector: 'app-shopkeeper-page',
  templateUrl: './shopkeeper-page.component.html',
  styleUrls: ['./shopkeeper-page.component.scss']
})
export class ShopkeeperPageComponent implements OnInit {

  constructor(public config: ConfigService) {
    if (!this.config.shopkeeper) { this.config.router.navigateByUrl('/login'); }
  }

  ngOnInit() {
  }

}
