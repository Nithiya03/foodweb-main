import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminServiceService } from 'src/app/services/admin-service.service';
import { ProductList } from '../addproduct/productlist'
@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss']
})
export class AddproductComponent implements OnInit {

  public adminForm:FormGroup | any;
  public _id!:string;

  constructor(private adminService:AdminServiceService,private fb:FormBuilder) { 
    this.adminForm = this.fb.group({
      foodName : new FormControl('',[Validators.required,Validators.pattern("^[A-Za-z0-9 -]{7,}$")]),
      foodDetail:new FormControl('',[Validators.required]),
      foodPrice: new FormControl('',[Validators.required,Validators.pattern("^[0-9]{1,4}")]),
      foodImage:new FormControl('',[Validators.required])
    })
  }

  ngOnInit(): void {
    this._id = this.adminService.getId
    this.adminService.getproductData(this._id).subscribe(
      (res:any)=>this.editProduct(res),
      (err:any)=>alert(err.message)
    )
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

  
  private editProduct(product : ProductList ){
    this.adminForm.patchValue({
      foodName:product.foodName,
      foodDetail:product.foodDetail,
      foodPrice:product.foodPrice,
      foodImage:product.foodImage
    })
  }

  public add(userForm:FormGroup){
    if(!this._id){
      this.adminService.addProduct(userForm.value).subscribe(()=>{
        alert("product added successfully");
      })
    }
    else{
      this.adminService.updateProduct(this._id,userForm.value).subscribe(()=>{
        alert("product updated successfully");
      })
    }
    
  }

}
