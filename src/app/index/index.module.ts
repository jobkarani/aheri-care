import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index.component';
import { SharedModule } from '../shared/shared.module';
import { IndexRoutingModule } from './index-routing.module';
import { HomeDetailsComponent } from './home-details/home-details.component';
import { CountToModule } from 'angular-count-to';
import { CountToComponent } from './count-to/count-to.component';
import { ServiceSliderComponent } from './service-slider/service-slider.component';
import { BlogsSliderComponent } from './blogs-slider/blogs-slider.component';
import { ProductsSliderComponent } from './products-slider/products-slider.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';


@NgModule({
  declarations: [
    IndexComponent,
    HomeDetailsComponent,
    CountToComponent,
    ServiceSliderComponent,
    BlogsSliderComponent,
    ProductsSliderComponent,
    TestimonialsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    IndexRoutingModule,
    CountToModule,
  ]
})
export class IndexModule { }
