import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl, Validators, NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { OrderDetailsService } from '../services/order-details.service';
import { Role } from './role';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class RoleComponent implements OnInit {
  userModel = new Role();
  access: any = ['user', 'admin']  
  user:any="";
  constructor(private router:Router,private service:OrderDetailsService) { }

  ngOnInit(): void {
  }


  submit(userForm:NgForm){  
   if(Object.values(userForm.value)[0] == "user" ){
    this.user=Object.values(userForm.value)[0] ;
    this.service.setUser=this.user
    this.router.navigate(['/home']);
   }
   else{
    this.user=Object.values(userForm.value)[0] ;
    this.service.setUser=this.user
    this.router.navigate(['/admin']);
   }
  }  
}
