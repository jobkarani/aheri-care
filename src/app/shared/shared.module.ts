import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseLayoutComponent } from '../components/base-layout/base-layout.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { FooterComponent } from '../components/footer/footer.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    BaseLayoutComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    BaseLayoutComponent,
    NavbarComponent,
    FooterComponent,
  ]
})
export class SharedModule { }
