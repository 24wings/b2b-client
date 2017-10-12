import { Component, OnInit, HostBinding } from '@angular/core';
import { SlideInDownAnimation } from '../../animate/SlideInDownAnimation';

@Component({
  selector: 'app-transition',
  templateUrl: './transition.component.html',
  styleUrls: ['./transition.component.css'],
  animations: [SlideInDownAnimation]
})
export class TransitionComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  @HostBinding('style.width') width = '100vw';

  @HostBinding('style.position') position = 'absolute';

  constructor() { }

  ngOnInit() {
  }

}
