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
  foodName !: string;
  foodDetail!: string;
  foodPrice!: string;
  foodImage!: any ;
  adminForm!:FormGroup;
  getMenuId: any;

  adminArray:ProductList[] =[]
  actionbtn!:string;
  _id!:string;
  choosen: any;

  constructor(private adminService:AdminServiceService,private fb:FormBuilder,private router:Router,private route: ActivatedRoute) { 
    this.adminForm = this.fb.group({
      foodName : new FormControl('',[Validators.required]),
      foodDetail:new FormControl('',[Validators.required]),
      foodPrice: new FormControl('',[Validators.required]),
      foodImage:new FormControl('',[Validators.required])
    })
  }

  ngOnInit(): void {
    this._id = this.adminService.getId
    this.adminService.getproductData(this._id).subscribe(
      (res:any)=>this.editProduct(res),
      (err:any)=>console.log(err)
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

  fileChangeEvent(event : any){
      if(event.target.value){
        this.foodImage = <File>event.target.files[0];
        this.choosen =  true
        console.log("image"+this.foodImage);
        console.log("chho"+this.choosen);
      }
  }

  add(userForm:FormGroup){
    console.log("Addproduct"+userForm.value + "id" +this._id)
    if(!this._id){
      this.adminService.addProduct(userForm.value).subscribe((res)=>{
        console.log("post"+res)
        alert("product added successfully");
      })
    }
    else{
      this.adminService.updateProduct(this._id,userForm.value).subscribe((res)=>{
        console.log("update"+res)
        alert("product updated successfully");
      })
    }
    
  }

}
