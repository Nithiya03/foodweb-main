import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {
  readonly baseURL = 'http://localhost:3000/admins';
  productId! :string;
  constructor(private http:HttpClient) { }

  addProduct(userForm:NgForm){
    return this.http.post(this.baseURL,userForm)
  }
  getProduct(){
    return this.http.get(this.baseURL)
  }
  getOrder(){
    return this.http.get(this.baseURL+`/orderList`);
  }
  getproductData(_id:string){
    return this.http.get(this.baseURL + `/${_id}`);
  }
  updateProduct(_id:string,userForm:NgForm){
    console.log(_id+ " "+userForm)
    return this.http.put(this.baseURL+`/${_id}`,userForm);
  }
  deleteProduct(_id:string){
    return this.http.delete(this.baseURL + `/${_id}`);
  }

  postOrderDetail(userForm:FormGroup,quantity1:number,total:number,foodName:string){
    console.log("q"+quantity1);
    console.log("ser"+JSON.stringify(userForm));
    
    
    return this.http.post(this.baseURL+`/${quantity1}`+`/${total}`+`/${foodName}`,userForm);
  }

  set setId(_id : string){
    this.productId = _id;
  }

  get getId(){
    return this.productId;
  }
}
