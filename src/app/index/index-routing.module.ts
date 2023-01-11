import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeDetailsComponent } from '../index/home-details/home-details.component';
import { IndexComponent } from './index.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    children: [
        {path:"",component:HomeDetailsComponent},
      ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndexRoutingModule {}