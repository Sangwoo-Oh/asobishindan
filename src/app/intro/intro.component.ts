import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { slideInAnimation } from './animations';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['../../assets/css/style.css'],
  animations: [
    slideInAnimation
    // animation triggers go here
  ]

})
export class IntroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation
    );
  }
}
