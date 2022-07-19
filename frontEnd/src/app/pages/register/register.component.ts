import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { OrderDetailsService } from 'src/app/services/order-details.service';
import {User} from './user1'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  @ViewChild('userForm') userForm !: NgForm;
  public choice : boolean = false;
  public userModel = new User();
  private userId: any;
  constructor(private service:OrderDetailsService,private param:ActivatedRoute) { }

  ngOnInit(): void {
    this.userId = this.param.snapshot.paramMap.get('id');
    if(this.userId){
      this.service.getUserDetailById(this.userId).subscribe(
        (res:any)=>this.editData(res),
        (err:any)=>alert(err.error.message)
      )
    }
  }

  private editData(res : User){
    this.choice = true;
    this.userForm.setValue({
      name : res.name,
      mobile :res.mobile,
      email : res.email,
      password : res.password,
      confirmPassword:res.confirmPassword
    })
  }
  public update(userform : NgForm){
    this.service.updateUser(userform.value,this.userId).subscribe(()=>{
    })
  }

  public access(userForm:NgForm){
    this.service.postUserDetail(userForm.value).subscribe(()=>{
    })
  }
}
