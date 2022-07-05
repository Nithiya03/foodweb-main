import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar'
import { OrderDetailsService } from 'src/app/services/order-details.service';
import {User} from '../register/user1'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userModel = new User();
  user:any ={}
  alertify: any;
  constructor(private router:Router,private service:OrderDetailsService,private snackBar:MatSnackBar){}
  ngOnInit(): void {
  }
  accessHome(userForm:NgForm){
    localStorage.setItem('user1',JSON.stringify(userForm.value))
    this.user=this.service.access(userForm.value)
    if(this.user){
     window.alert("Login Successful")
      // this.snackBar.open("Login Successful")
      this.router.navigate(['/menu'])
    }
    else{
      window.alert("Login Not Successful")
      // this.snackBar.open("Login Not Successful")
      this.router.navigate(['/login'])
    }
  }
}

