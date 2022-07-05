import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminServiceService } from 'src/app/services/admin-service.service';
import { OrderDetailsService } from 'src/app/services/order-details.service';
import { ProductList } from '../addproduct/productlist'
@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss']
})
export class AddproductComponent implements OnInit {
  foodName !: string;
  foodDetail!: string;
  foodPrice!: string;
  foodImage!: string;
  adminForm!:FormGroup;
  getMenuId: any;

  constructor(private adminService:AdminServiceService,private fb:FormBuilder,private router:Router,private route: ActivatedRoute) { 
    this.adminForm = this.fb.group({
      foodName : new FormControl('',[Validators.required]),
      foodDetail:new FormControl('',[Validators.required]),
      foodPrice: new FormControl('',[Validators.required]),
      foodImage:new FormControl('',[Validators.required])
    })
  }

  ngOnInit(): void {
    this.getMenuId = this.route.snapshot.paramMap.get('id');
  }

  add(userForm:FormGroup){
    console.log(userForm.value)
    this.adminService.addProduct(userForm.value).subscribe((res)=>{
      console.log("register"+res); 
    });
  }

}
