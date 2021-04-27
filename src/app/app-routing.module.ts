import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelloComponent } from './hello/hello.component';

import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {path:'products',component:ProductsComponent},
  {path:'hello',component:HelloComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
