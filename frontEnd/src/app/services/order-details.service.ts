import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, NgForm } from '@angular/forms';
import { order } from '../pages/menupage/order';
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
    const data = localStorage.getItem('token')
    return data;
  }

  postUserDetail(userForm:NgForm){
    return this.http.post(this.baseURLuser,userForm);
  }
  postloginDetail(username :string,password :string){
    return this.http.get(this.baseURLuser+`/${username}`+`/${password}`)
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

  get getUser():string{
    return this.role;
  }


}
