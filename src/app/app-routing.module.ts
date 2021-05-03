import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelloComponent } from './hello/hello.component';

import { ProductsComponent } from './products/products.component';
import { StaffDetailesComponent } from './staff-detailes/staff-detailes.component';

const routes: Routes = [
  {path:'products',component:ProductsComponent},
  {path:'hello',component:HelloComponent},
  {path:'stafflist',component:StaffDetailesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
