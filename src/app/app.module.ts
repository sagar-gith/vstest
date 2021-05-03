import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { FormsModule } from '@angular/forms';
import { HelloComponent } from './hello/hello.component';
import { HttpClientModule } from '@angular/common/http';
import { StaffDetailesComponent } from './staff-detailes/staff-detailes.component';
import { HelooComponent } from './heloo/heloo.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    HelloComponent,
    StaffDetailesComponent,
    HelooComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
