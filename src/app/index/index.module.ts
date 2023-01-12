import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index.component';
import { SharedModule } from '../shared/shared.module';
import { IndexRoutingModule } from './index-routing.module';
import { HomeDetailsComponent } from './home-details/home-details.component';
import { CountToModule } from 'angular-count-to';
import { CountToComponent } from './count-to/count-to.component';



@NgModule({
  declarations: [
    IndexComponent,
    HomeDetailsComponent,
    CountToComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    IndexRoutingModule,
    CountToModule,
  ]
})
export class IndexModule { }
