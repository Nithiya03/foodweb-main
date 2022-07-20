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
  private passwordStatus : boolean = false;
  public userModel = new User()
  public emailCheck : any = false;
  public userForm:FormGroup| any;
  private currentEmail!:any;
  private newPassword:any ='';
  private cPassword :any ='';
  
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
  public checkEmail(userForm:NgForm){
    this.service.postCheckEmail(userForm.value).subscribe((res:any)=>{  
      this.currentEmail = userForm.value['email']
      this.emailCheck = res['message']
    },(err)=>{
      alert(err.error.message)
    })
  }

  public validation(userForm : FormGroup){    
     this.newPassword = userForm.value['password']
     this.cPassword = userForm.value['confirmPassword']
    if(this.newPassword != this.cPassword){
      alert("password mismatch")
    }
    else if(this.newPassword == this.cPassword){
      this.passwordStatus = true;
    }
    else if(this.newPassword == null && this.cPassword == null) {
      alert("the field cannot be empty")
    }
  }
  public updatepassword(userForm:FormGroup){      
    if(this.passwordStatus == true){
      this.service.update(this.currentEmail,userForm.value).subscribe(()=>{
        alert("password updated")
        this.router.navigate(['/login'])
      })
    }
  }
}
