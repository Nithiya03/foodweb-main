import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, NgForm } from '@angular/forms';
import { order } from '../pages/menupage/order';
@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService{
  readonly baseURLuser = 'http://localhost:8000/users';
  readonly baseURL = 'http://localhost:8000/admins';
  role: string ="";
  userData: any;
  constructor(private http:HttpClient) { }

  getAllProduct(){
    return this.http.get(this.baseURL+'/getAllProduct');
  }
  getProductById(_id :string){
    return this.http.get(this.baseURL+`/${_id}`)
  }
  // getCheck():boolean{
  //   return this.data = true;
  // }
  // getChecklog(){
  //   if(this.getCheck()){
  //     return this.authData = true;
  //   }
  //   else{
  //     return this.authData = false
  //   }
  // }
  postUserDetail(userForm:NgForm){
    return this.http.post(this.baseURLuser+`/postUserDetail`,userForm);
  }
  postLoginDetail(userForm:NgForm){
    return this.http.post(this.baseURLuser+`/login`,userForm);
  }
  postCheckEmail(userForm:NgForm){
    return this.http.post(this.baseURLuser+`/emailCheck`,userForm)
  }
  getuserEmail(email : any){
    return this.http.get(this.baseURLuser+`/getUserEmail`,email)
  }
  getuserDetails(){
    return this.http.get(this.baseURLuser+`/userDetail`)
  }
  // accessData(_id:string,data:any){
  //   console.log(JSON.stringify(data));
  //   return this.http.put(this.baseURLuser+`/${_id}`,data)
  // }
  update(email:string,password:string){
    return this.http.put(this.baseURLuser+`/${email}`,password)
  }
  getToken(){
    return localStorage.getItem('token');
  }
  loggedIn(){
    return !!localStorage.getItem('token')
  } 

  set setUser(val: string){
    this.role = val;
  }

  get getUser(){
    return this.role;
  }

  set userEmail(val: string){
    console.log(val);
    
    this.userData = val;
  }
  get getEmail(){
    return this.userData
  }
}
