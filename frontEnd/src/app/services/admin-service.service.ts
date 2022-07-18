import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {
  readonly baseURL = 'http://localhost:8000/admins';
  productId! :string;
  constructor(private http:HttpClient) { }

  addProduct(userForm:FormGroup){
    return this.http.post(this.baseURL+`/addProduct`,userForm)
  }
  getProduct(){
    return this.http.get(this.baseURL+`/getAllProduct`)
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
  adminLogin(userForm:NgForm){
    return this.http.post(this.baseURL+`/login`,userForm)
  }
  loggedIn(){
    return !!localStorage.getItem('token')
  }
  userAccess(){
    
  }
  postOrderDetail(userForm:FormGroup,quantity1:number,total:number,foodName:string){
    return this.http.post(this.baseURL+`/${quantity1}`+`/${total}`+`/${foodName}`,userForm);
  }

  set setId(_id : string){
    this.productId = _id;
  }

  get getId(){
    return this.productId;
  }
}
