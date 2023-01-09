import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeDetailsComponent } from './home-details/home-details.component';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.mudule';



@NgModule({
  declarations: [
    HomeDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
  ]
})
export class HomeModule { }
