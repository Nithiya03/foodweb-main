import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }
  readonly baseURLlogin = 'http://localhost:8000/users';
   
  public accessData(_id:string,access:any){
    console.log(access);
    let data ={
      "access" : access
    }
    return this.http.post(this.baseURLlogin+`/updateUser`+`/${_id}`,data)
  }
  
}
