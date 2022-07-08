import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from  '@angular/router'
import { AdminServiceService } from 'src/app/services/admin-service.service';
import { OrderDetailsService } from 'src/app/services/order-details.service';
import { order } from './order';

@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.scss']
})

export class MenupageComponent implements OnInit {
  name !: string;
  phone!: number;
  address!: string;
  quantity: number = 1
  total!:number;

  constructor(private param:ActivatedRoute,private service:OrderDetailsService,private fb:FormBuilder,private router:Router,private adminService:AdminServiceService) { 
    this.menuForm = this.fb.group({
      name : new FormControl('',[Validators.required]),
      phone:new FormControl('',[Validators.required]),
      address: new FormControl('',[Validators.required]),
      // quantity:new FormControl('',[Validators.required])
    })
  }
  userModel = new order()
  getMenuId:any;
  menuData:any = [];
  orderChoice : boolean = false;
  menuForm!:FormGroup;

  ngOnInit(){
    this.getMenuId = this.param.snapshot.paramMap.get('id');
    console.log("id"+this.getMenuId)
    if(this.getMenuId)
    {
      this.service.getProductById(this.getMenuId).subscribe((res)=>{
        this.menuData = res
        console.log(this.menuData['foodName'])
      });
    }
  }

  orderDetail(){
    this.orderChoice = true; 
  }

  decrease(){
    if(this.quantity <= 1){
      this.quantity = 1;
    }
    else{
      this.quantity--;
    }
  }

  increase(){
    if(this.quantity >= 10){
      this.quantity = 10;
    }
    else{
      this.quantity++;
    }
  }
  getquantity(){
  }

  productData(userForm:FormGroup,quantity1:number,total:number){
    this.adminService.postOrderDetail(userForm.value,quantity1,total,this.menuData['foodName']).subscribe(()=>{

    })
  }

}
