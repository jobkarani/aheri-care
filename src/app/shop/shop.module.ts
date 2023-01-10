import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgxPaginationModule } from 'ngx-pagination';
import { ShopRoutingModule } from './shop-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ShopComponent } from './shop.component';



@NgModule({
  declarations: [
    ProductListComponent,
    ShopComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ShopRoutingModule,
    MatPaginatorModule,
    NgxPaginationModule,
  ]
})
export class ShopModule { }
