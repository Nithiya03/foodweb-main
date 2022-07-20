import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar'
import { OrderDetailsService } from 'src/app/services/order-details.service';
import { User } from '../register/user1'
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public userModel = new User();
  private message: any;
  public token: any;
  
  constructor(private router: Router, private service: OrderDetailsService, private snackBar: MatSnackBar,public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  public login(userForm: NgForm) {
    this.service.userEmail=userForm.value['email']
    this.service.postLoginDetail(userForm.value).subscribe((res:any) => {    
      this.message = res['message']
      this.token = res['token']

      if (this.message == 'true') {
        this.router.navigate(['/menu'])
        localStorage.setItem('token', this.token)
      }
      else {
        window.alert("Invalid Login")
        this.router.navigate(['/login'])
      }
    })
  }
}

