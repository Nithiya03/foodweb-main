import { ArrayType } from '@angular/compiler';
import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OrderDetailsService } from 'src/app/services/order-details.service';
import { User } from '../register/user1';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  passwordSts : boolean = false;
  userModel = new User()
  emailCheck : any = false;
  userForm:FormGroup| any;
  currentEmail!:any;
  newPassword:any ='';
  cPassword :any =''
  constructor(private service:OrderDetailsService,private router:Router,private fb:FormBuilder) { 
    this.userForm = this.fb.group({
      password : new FormControl('',[Validators.required,Validators.pattern("^([A-Z]{1})[a-z0-9]{7,}$")]),
      confirmPassword:new FormControl('',[Validators.required,Validators.pattern("^([A-Z]{1})[a-z0-9]{7,}$")]),
    })
  }

  ngOnInit(): void {
  }
  get confirmPassword(){
    return this.userForm.get('confirmPassword')
  }
  get password(){
    return this.userForm.get('password')
  }
  checkEmail(userForm:NgForm){
    this.service.postCheckEmail(userForm.value).subscribe((res)=>{
      this.currentEmail = Object.values(userForm.value);
      this.emailCheck = Object.values(res)

    },
    (err)=>{
      console.log(err.error);
      
    })
  }
  validation(userForm : FormGroup){
     this.newPassword = Object.values(userForm.value)[0]
     this.cPassword = Object.values(userForm.value)[1]
    if(this.newPassword != this.cPassword){
      alert("password mismatch")
    }
    else if(this.newPassword == this.cPassword){
      this.passwordSts = true;
      alert("password changed successfully")
    }
    else if(this.newPassword == null && this.cPassword == null) {
      alert("the field cannot be null")
    }
  }
  updatepassword(userForm : FormGroup){      
    if(this.passwordSts == true){
      this.service.update(this.currentEmail,userForm.value).subscribe((res)=>{
        this.router.navigate(['/login'])
      },
      (err)=>{
        alert(err)
        
      })
    }
    else{
      alert("password Not Updated")
    }
  }
}