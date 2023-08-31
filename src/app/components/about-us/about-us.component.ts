import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],

  animations: [
    trigger('moveImage', [
      state('start', style({
        transform: 'translateX(0)',
      })),
      state('end', style({
        transform: 'translateX(100%)',
      })),
      transition('start <=> end', [
        animate('2s')
      ]),
    ]),
  ],

})
export class AboutUsComponent {

  animationState = 'start';

  constructor() { }

  ngOnInit(): void {
    this.startAnimation();
  }

  startAnimation() {
    setInterval(() => {
      this.animationState = this.animationState === 'start' ? 'end' : 'start';
    }, 2000); // Change the interval as needed (milliseconds).
  }

}
