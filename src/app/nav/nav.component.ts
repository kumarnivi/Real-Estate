import { style, trigger, state, transition, animate } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  animations: [
    trigger('slideInLeft', [

      state('unhovered', style({ opacity: 0, transform: 'translateX(-100%)' })),
      state('hovered', style({ opacity: 1, transform: 'translateX(0)' })),
      transition('unhovered <=> hovered', animate('300ms ease-in-out')),
    ]),
    trigger('zoomOut', [
      state('hovered', style({ transform: 'scale(0.4)' })),
      state('unhovered', style({ transform: 'scale(1)' })),
      transition('hovered => unhovered', animate('300ms ease-in-out')),
    ]),
    trigger('fadeInUp', [
      state('unhovered', style({ opacity: 1, transform: 'translateY(13px)' })),
      state('hovered', style({ opacity: 0, transform: 'translateY(0)' })),
      transition('unhovered <=> hovered', animate('300ms ease-in-out')),
    ]), 
  ],
})
export class NavComponent {
  isHovered = false


  
  animationState = 'unhovered';

  onMouseEnter() {
    this.animationState = 'hovered';
  }

  onMouseLeave() {
    this.animationState = 'unhovered';
  }

  //************************************ */
  animationState1 = 'unhovered';

  onMouseEnter1() {
    this.animationState1 = 'hovered';
  }

  onMouseLeave1() {
    this.animationState1 = 'unhovered';
  }
}
