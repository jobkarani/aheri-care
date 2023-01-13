import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperComponent } from './swiper.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SwiperComponent],
  exports: [SwiperComponent]
})
export class SwiperModule { }
