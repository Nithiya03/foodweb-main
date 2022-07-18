import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {
  readonly baseURL = 'http://localhost:8000/admins';
  public productId! :string;
  
  constructor(private http:HttpClient) { }

  public addProduct(userForm:FormGroup){
    return this.http.post(this.baseURL+`/addProduct`,userForm)
  }

  public getProduct(){
    return this.http.get(this.baseURL+`/getAllProduct`)
  }

  public getOrder(){
    return this.http.get(this.baseURL+`/orderList`);
  }

  public getproductData(_id:string){
    return this.http.get(this.baseURL + `/${_id}`);
  }

  public updateProduct(_id:string,userForm:NgForm){
    console.log(_id+ " "+userForm)
    return this.http.put(this.baseURL+`/${_id}`,userForm);
  }

  public deleteProduct(_id:string){
    return this.http.delete(this.baseURL + `/${_id}`);
  }

  public adminLogin(userForm:NgForm){
    return this.http.post(this.baseURL+`/login`,userForm)
  }

  public loggedIn(){
    return !!localStorage.getItem('token')
  }

  public postOrderDetail(userForm:FormGroup,quantity1:number,total:number,foodName:string){
    return this.http.post(this.baseURL+`/${quantity1}`+`/${total}`+`/${foodName}`,userForm);
  }

  public set setId(_id : string){
    this.productId = _id;
  }

  public get getId(){
    return this.productId;
  }
}
