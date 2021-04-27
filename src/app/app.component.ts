import { Component } from '@angular/core';



export class ProductCategory{
  ProductCategoryId:number=0;
  ProductCategoryName:string='';
  
}

export class ProductSubCategory{
  ProductSubCategoryId:number=0;
  ProductSubCategoryName:string='';
  ProductCategoryId:number=0;
}


export class Products{
  ProductId:Number=0;
  ProductName:string='';
  ProductFeatures:string='';
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  productObject  : Products = new Products();
  ProductArray  : Products[]=[];


  title = 'newproject';

  constructor(){
    // this.Name=this.ProductServiceApi.productname
    // this.productObject = new Products;
    // this.productObject.ProductId=1;
    // this.productObject.ProductName='DELL';
    // this.productObject.ProductFeatures='8GB RAM,512GB SSD';

    // this.productObject = new Products;
    // this.productObject.ProductId=2;
    // this.productObject.ProductName='Lenovo';
    // this.productObject.ProductFeatures='8GB RAM, 1TB HDD';

    // this.productObject = new Products;
    // this.productObject.ProductId=3;
    // this.productObject.ProductName='hp';
    // this.productObject.ProductFeatures='8GB RAM, 1TB HDD';

    // this.productObject = new Products;
    // this.productObject.ProductId=4;
    // this.productObject.ProductName='thoshiba';
    // this.productObject.ProductFeatures='8GB RAM, 1TB HDD';

    // this.ProductArray.push(this.productObject);
    // console.log(this.ProductArray)

    // for(var i:number=1;i<=100;i++){
    //   this.productObject = new Products;
    //   this.productObject.ProductId=i;
    //   this.productObject.ProductName='hp'+i;
    //   this.productObject.ProductFeatures='8GB RAM, 1TB HDD';
    //   this.ProductArray.push(this.productObject)
    // }
   
  }
}
