import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceListComponent } from './service-list/service-list.component';
import { ServicesComponent } from './services.component';

const routes: Routes = [
  {
    path: '',
    component: ServicesComponent,
    children: [
        {path:"",component:ServiceListComponent},
        // { path: 'country-details/:id', component: CountryDetailsComponent },
      ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicePageRoutingModule {}