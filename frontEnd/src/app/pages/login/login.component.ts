import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar'
import { OrderDetailsService } from 'src/app/services/order-details.service';
import {User} from '../register/user1'
import { IfStmt, Token } from '@angular/compiler';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userModel = new User();
  username ! : any;
  password !: any;
  user:any ={}
  alertify: any;
  message: any;
  token: any;
  constructor(private router:Router,private service:OrderDetailsService,private snackBar:MatSnackBar){}
  ngOnInit(): void {
  }

  login(userForm:NgForm){
    this.username = Object.values(userForm.value)[0]
    this.password = Object.values(userForm.value)[1]
    console.log(this.username  + "hjfghjgf "+this.password )
    this.service.postloginDetail(this.username,this.password).subscribe((res)=>{
      console.log("res "+JSON.stringify(res));
      this.message=Object.values(res)[1]
      this.token=Object.values(res)[0]
      
      if(this.message == 'true'){
        this.router.navigate(['/menu'])
        localStorage.setItem('token',this.token)
      }
      else{
        window.alert("Invalid Login")
        this.router.navigate(['/login'])
      }
    })
    
  }
}

