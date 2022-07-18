import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { OrderDetailsService } from 'src/app/services/order-details.service';
import {User} from './user1'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  userModel = new User();
  constructor(private service:OrderDetailsService) { }

  ngOnInit(): void {
  }

  access(userForm:NgForm){
    this.service.postUserDetail(userForm.value).subscribe((res)=>{
    },
    (err)=>{
      alert(err)
    });
  }
}
