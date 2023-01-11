import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogsRoutingModule } from './blogs-routing.module';
import { SharedModule } from '../shared/shared.module';
import { BlogsComponent } from './blogs.component';
import { BlogsListComponent } from './blogs-list/blogs-list.component';
import { ContactComponent } from './contact/contact.component';



@NgModule({
  declarations: [
    BlogsComponent,
    BlogsListComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    BlogsRoutingModule,
  ]
})
export class BlogsModule { }
