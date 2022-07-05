import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {Admin} from '../admin-login/admin'

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {
  userModel = new Admin();
  userName:string = "Admin199";
  password:string = "199@admin";
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  adminAccess(userForm:NgForm){
    if(this.userName == Object.values(userForm.value)[0] && this.password == Object.values(userForm.value)[1]){
      this.router.navigate(['product']);
    }
    else{
      this.router.navigate(['/admin'])
      window.alert("Error in admin Login")
      
    }
  }
}
