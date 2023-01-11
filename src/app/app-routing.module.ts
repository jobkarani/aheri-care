import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },

  {
    path: 'home',
    canActivate: [],
    loadChildren: ()=> import('./index/index.module').then((m)=>m.IndexModule)
  },
  {
    path: 'shop',
    canActivate: [],
    loadChildren: ()=> import('./shop/shop.module').then((m)=>m.ShopModule)
  },
  {
    path: 'services',
    canActivate: [],
    loadChildren: ()=> import('./services-page/services.module').then((m)=>m.ServicesModule)
  },
  {
    path: 'blogs',
    canActivate: [],
    loadChildren: ()=> import('./blogs/blogs.module').then((m)=>m.BlogsModule)
  },
  {
    path: 'contact',
    canActivate: [],
    loadChildren: ()=> import('./contact/contact.module').then((m)=>m.ContactModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
