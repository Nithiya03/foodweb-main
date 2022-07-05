import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { map, pipe } from 'rxjs';
import { User } from '../pages/register/user1';


@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService{
  private userList=[]
  readonly baseURLuser = 'http://localhost:3000/users';
  readonly baseURL = 'http://localhost:3000/admins';
  data : boolean = false
  authData : boolean = false;
  user : any ={}
  role: string ="";
  constructor(private http:HttpClient) { }

  getAllProduct(){
    return this.http.get(this.baseURL);
  }
  getProductById(_id :string){
    console.log("service id"+_id)
    return this.http.get(this.baseURL+`/${_id}`)
  }
  getCheck():boolean{
    return this.data = true;
  }
  getChecklog(){
    if(this.getCheck()){
      return this.authData = true;
    }
    else{
      return this.authData = false
    }

  }
  authlog(){
    const data = localStorage.getItem('user1')
    return data;
  }

  accesslogin(userForm:NgForm){
    return this.http.post(this.baseURLuser,userForm);
  }

  access(userForm:NgForm){
    console.log("userForm "+userForm.value)
    const data = JSON.stringify(userForm.value)
   let userArray:any;
   if(localStorage.getItem('user')){
     userArray=localStorage.getItem('user');
     console.log("userArray "+userArray)
   } 
   return userArray
  }

  checkAccess(){
    if(localStorage.getItem('user1')){
      return true;
    }
    else{
      return false;
    }
  }

  set setUser(val: string){
    this.role = val;
  }

  get getUser():string{
    return this.role;
  }

  postProduct(data:any){
    return this.http.post<any>("http://localhost:3000/productList/",data)
  }

  getProduct(){
    return this.http.get<any>("http://localhost:3000/productList/")
  }
  putProduct(data:any, id: number){
    return this.http.put<any>("http://localhost:3000/productList/"+id,data)
  }

  deleteProduct(id:number){
    return this.http.delete<any>("http://localhost:3000/productList/"+id)
  }
}
