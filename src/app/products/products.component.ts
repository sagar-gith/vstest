import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductService } from '../product.service';

export class Products{
ProductId:number=0;
ProductName:string='';
ProductFeatures:string='';
ProductSubCatId:string='';
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productobject : Products = new Products();
  products: Products[]=[];

  constructor(private productservice:ProductService,private router:Router) { }

  ngOnInit() {
   this.ReloadData();
  }
  ReloadData(){
    this.productservice.GetProducts().subscribe((data:any)=>{this.products=data})
  }
}
