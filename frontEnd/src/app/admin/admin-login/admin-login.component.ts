import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminServiceService } from 'src/app/services/admin-service.service';
import {Admin} from '../admin-login/admin'

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {
  public userModel = new Admin();
  constructor(private router:Router,private adminService:AdminServiceService) { }

  ngOnInit(): void {
  }

  adminAccess(userForm:NgForm){
    this.adminService.adminLogin(userForm.value).subscribe((res:any) => {
        if(res['message']=='true'){
          this.router.navigate(['/product'])
          localStorage.setItem('token',res['token'])
        }
        else{
          this.router.navigate(['/admin'])
        }
    })
  }
}
