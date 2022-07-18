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
  quantity: number = 1
  total!:number;
  menuForm:FormGroup | any;
  userModel = new order()
  getMenuId:any;
  menuData:any = [];
  orderChoice : boolean = false;

  constructor(private param:ActivatedRoute,private service:OrderDetailsService,private fb:FormBuilder,private router:Router,private adminService:AdminServiceService) { 
    this.menuForm = this.fb.group({
      name : new FormControl('',[Validators.required,Validators.pattern('^[[A-Z]{1}[a-z]{1,9}$')]),
      phone: new FormControl('',[Validators.required,Validators.pattern('^[6-9]{1}[0-9]{9}$')]),
      address: new FormControl('',[Validators.required]),
      quantity!: new FormControl('',[Validators.required]),
      total!: new FormControl('',[Validators.required]),
    })
  }
  

  ngOnInit(){
    this.getMenuId = this.param.snapshot.paramMap.get('id');
    if(this.getMenuId)
    {
      this.service.getProductById(this.getMenuId).subscribe((res)=>{
        this.menuData = res
      });
    }
  }

  get name(){
    return this.menuForm.get('name')
  }
  get phone(){
    return this.menuForm.get('phone')
  }
  get address(){
    return this.menuForm.get('address')
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
