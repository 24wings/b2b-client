import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../lib';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(public config: ConfigService) { }

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
