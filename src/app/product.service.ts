import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  
  GetProducts() : Observable <any> {
    return this.http.get('https://localhost:44349/api/allproducts');
  }
  
  GetStaffDetails() : Observable <any>{
    return this.http.get('https://localhost:44349/api/staffdetails');
  }

}
