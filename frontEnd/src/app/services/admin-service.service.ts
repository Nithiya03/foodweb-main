import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {
  readonly baseURL = 'http://localhost:3000/admins';

  constructor(private http:HttpClient) { }

  addProduct(userForm:NgForm){
    return this.http.post(this.baseURL,userForm)
  }
  getProduct(){
    return this.http.get(this.baseURL)
  }

}
