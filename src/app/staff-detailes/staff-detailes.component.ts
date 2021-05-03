import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

export class StaffDetails{
  FirstName:string='';
  LastName:string='';
  Dob:string='';
  Email:string='';
  Phone:string='';
  LinkedIn:string='';
  Designation:string='';
  Department:string='';
  DateofJoining:string='';
  Language:string='';
  IsActive:boolean=true;
}

@Component({
  selector: 'app-staff-detailes',
  templateUrl: './staff-detailes.component.html',
  styleUrls: ['./staff-detailes.component.css']
})
export class StaffDetailesComponent implements OnInit {

  staff : StaffDetails = new StaffDetails();
  stafflist : StaffDetails []=[];

  constructor(private productservice :ProductService, private router : Router) { }

  ngOnInit(): void {
    this.GetStaffDetails() ;   
  }
  
  GetStaffDetails() {
    this.productservice.GetStaffDetails() .subscribe((data:any)=>{this.stafflist=data})

  }

}
