// route-animations.ts
import {
    trigger,
    transition,
    style,
    animate
  } from '@angular/animations';
  
  export const fader = trigger('routeAnimations', [
    transition('* <=> *', [
      style({ opacity: 0 }),
      animate('400ms ease-in', style({ opacity: 1 }))
    ])
  ]);
  