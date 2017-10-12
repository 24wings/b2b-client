import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../lib';
@Component({
  selector: 'app-bottom-bar',
  templateUrl: './bottom-bar.component.html',
  styleUrls: ['./bottom-bar.component.scss']
})
export class BottomBarComponent implements OnInit {
  activePath: string = '';

  constructor(public config: ConfigService) {
    this.activePath = this.config.location.path();
    console.log(this.activePath);
  }

  ngOnInit() {
  }
  my() {
    if (this.config.user) {
      this.config.router.navigateByUrl('/user');
      return;
    }
    if (this.config.shopkeeper) {
      this.config.router.navigateByUrl('/shopkeeper');
      return;
    } else {
      this.config.router.navigateByUrl('/login');
    }



  }



}
