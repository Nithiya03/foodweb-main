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

  login(userForm:NgForm){
    this.service.postloginDetail(userForm.value).subscribe((res)=>{
      console.log(res)
    })
    this.router.navigate(['/menu'])
  }
}

