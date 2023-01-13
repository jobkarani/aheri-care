import { Component, Input } from '@angular/core';

@Component({
  selector: 'swiper',
  template: `
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styleUrls: ['./swiper.component.css']
})
export class SwiperComponent {
  @Input() config: any;

  constructor() { }
}



