import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fader } from './route-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  template: `<main [@routeAnimations]="prepareRoute(outlet)">
    <router-outlet #outlet="outlet"></router-outlet>
  </main>`,
  animations: [fader]
})
export class AppComponent {
  title = 'Shree Navi Mumbai Bhanushali Charitable Trust';
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
