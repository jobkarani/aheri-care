import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { BlogsListComponent } from './blogs-list/blogs-list.component';
import { BlogsComponent } from './blogs.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path: '',
    component: BlogsComponent,
    children: [
        {path:"blogs",component:BlogsListComponent},
        { path: 'blog-details/:id', component: BlogDetailsComponent },
        { path: 'contact', component: ContactComponent },
      ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogsRoutingModule {}