import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { BlogsComponent } from './blogs/blogs.component';
import { CategoriesComponent } from './categories/categories.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ServiceDetailsComponent } from './service-details/service-details.component';
import { ServicesComponent } from './services-page/services.component';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'about', component: AboutComponent },
  { path: 'blogs', component: BlogsComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'service-details/:id', component: ServiceDetailsComponent },
  { path: 'contact-us', component: ContactComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'product-details/:id', component: ProductDetailsComponent },
  { path: 'categoryproducts/:id', component: CategoriesComponent },
  { path: 'blog-details/:id', component: BlogDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
