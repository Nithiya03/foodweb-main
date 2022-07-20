import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, NgForm } from '@angular/forms';
import { order } from '../userPages/menupage/order';
@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService{
  readonly baseURLuser = 'http://localhost:8000/users';
  readonly baseURL = 'http://localhost:8000/admins';
  private role: string ="";
  public userData: any;

  constructor(private http:HttpClient) { }

  public getAllProduct(){
    return this.http.get(this.baseURL+'/getAllProduct');
  }

  public getProductById(_id :string){
    return this.http.get(this.baseURL+`/${_id}`)
  }

  public postUserDetail(userForm:NgForm){
    return this.http.post(this.baseURLuser+`/postUserDetail`,userForm);
  }

  public postLoginDetail(userForm:NgForm){
    return this.http.post(this.baseURLuser+`/login`,userForm);
  }

  public postCheckEmail(userForm:NgForm){
    return this.http.post(this.baseURLuser+`/emailCheck`,userForm)
  }

  public getUserEmail(email : any){
    return this.http.get(this.baseURLuser+`/getUserEmail`+`/${email}`)
  }

  public getuserDetails(){
    return this.http.get(this.baseURLuser+`/userDetail/data`)
  }

  public getUserDetailById(id :string){
    return this.http.get(this.baseURLuser+`/${id}`)
  }

  public update(email:string,password:string){
    return this.http.put(this.baseURLuser+`/editpassword`+`/${email}`,password)
  }

  public updateUser(userform : NgForm,id : string){
    return this.http.put(this.baseURLuser+`/${id}`,userform)
  }

  public getToken(){
    return localStorage.getItem('token');
  }

  public loggedIn(){
    return !!localStorage.getItem('token')
  } 

  public set setUser(val: string){
    this.role = val;
  }

  public get getUser(){
    return this.role;
  }

  public set userEmail(val: string){
    localStorage.setItem('email',val)
    this.userData = val;
  }

  public get getEmail(){
    return this.userData
  }
}
