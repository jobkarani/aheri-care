import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceListComponent } from './service-list/service-list.component';
import { ServicePageRoutingModule } from './services-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
  
    ServiceListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ServicePageRoutingModule,
  ]
})
export class ServicesModule { }
