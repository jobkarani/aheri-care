import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceListComponent } from './service-list/service-list.component';
import { ServicePageRoutingModule } from './services-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ServicesComponent } from './services.component';



@NgModule({
  declarations: [
    ServiceListComponent,
    ServicesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ServicePageRoutingModule,
  ]
})
export class ServicesModule { }
