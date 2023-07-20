import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
// import { MatPaginatorModule } from '@angular/material/paginator';
import { NgxPaginationModule } from 'ngx-pagination';
import { ShopRoutingModule } from './shop-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ShopComponent } from './shop.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CategoriesComponent } from './categories/categories.component';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    ProductListComponent,
    ShopComponent,
    ProductDetailsComponent,
    CategoriesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ShopRoutingModule,
    // MatPaginatorModule,
    NgxPaginationModule,
    MatDialogModule,
  ]
})
export class ShopModule { }
