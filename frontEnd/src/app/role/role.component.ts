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
  public userModel = new Role();
  public role! : any
  public access: any = ['user', 'admin']  
  constructor(private router:Router,private service:OrderDetailsService) { }

  ngOnInit(): void {
  }
  public submit(userForm:NgForm){   
    this.role = userForm.value['role'];
    localStorage.setItem('role',this.role)
   if(this.role == "user" ){ 
    this.service.setUser=this.role
    this.router.navigate(['/home']);
   }
   else{
    this.service.setUser=this.role
    this.router.navigate(['/admin']);
   }
  }  
}
