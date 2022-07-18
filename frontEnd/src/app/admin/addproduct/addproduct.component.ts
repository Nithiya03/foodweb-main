import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { observable, Observable, Subscriber } from 'rxjs';
import { AdminServiceService } from 'src/app/services/admin-service.service';
import { ProductList } from '../addproduct/productlist'
@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss']
})
export class AddproductComponent implements OnInit {
  foodImg! :Observable<any>;
  cardImageBase64: any;
  adminForm:FormGroup |any;
  getMenuId: any;

  adminArray:ProductList[] =[]
  actionbtn!:string;
  _id!:string;
  choosen: any;
  imageError!: string;

  constructor(private adminService:AdminServiceService,private fb:FormBuilder,private router:Router,private route: ActivatedRoute) { 
    this.adminForm = this.fb.group({
      foodName : new FormControl('',[Validators.required,Validators.pattern("^[A-Za-z0-9 -]{7,}$")]),
      foodDetail:new FormControl('',[Validators.required]),
      foodPrice: new FormControl('',[Validators.required,Validators.pattern("^[0-9]{1,4}")]),
      foodImage:new FormControl('',[Validators.required])
    })
  }

  get foodName(){
    return this.adminForm.get('foodName')
  }
  get foodDetail(){
    return this.adminForm.get('foodDetail')
  }
  get foodPrice(){
    return this.adminForm.get('foodPrice')
  }
  get foodImage(){
    return this.adminForm.get('foodImage')
  }

  ngOnInit(): void {
    this._id = this.adminService.getId
    this.adminService.getproductData(this._id).subscribe(
      (res:any)=>this.editProduct(res),
      (err:any)=>alert(err)
    )
  }

  editProduct(product : ProductList ){

    this.adminForm.patchValue({
      foodName:product.foodName,
      foodDetail:product.foodDetail,
      foodPrice:product.foodPrice,
      foodImage:product.foodImage
    })
  }

  add(userForm:FormGroup){

    if(!this._id){
      this.adminService.addProduct(userForm.value).subscribe((res)=>{
        alert("product added successfully");
      },
      (err)=>{
        alert(err)
        
      })
    }
    else{
      this.adminService.updateProduct(this._id,userForm.value).subscribe((res)=>{
        // console.log("update"+res)
        alert("product updated successfully");
      },
      (err)=>{
        alert(err)
        
      })
    }
    
  }

}
