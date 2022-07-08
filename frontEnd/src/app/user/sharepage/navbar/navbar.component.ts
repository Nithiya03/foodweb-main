import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  accessLogin :string ="";
  accessdata!:string;
  constructor(private service:OrderDetailsService) { }

  ngOnInit(): void {
    const data = localStorage.getItem('user1')
    if(data){
      this.logIn()
    }
    else{
     this.logOut();
    }
  }
  logIn(){
    return localStorage.getItem('user1'); 
  }
  logOut(){
    localStorage.removeItem('user1');
  }

  accessuser(){
    this.accessLogin=this.service.getUser
    this.accessdata = this.accessLogin
    console.log("access"+this.accessdata)
    if(this.accessdata == 'user'){
      return true;
    }
    else{
      return false;
    }
  }

  accessadmin(){
    this.accessLogin=this.service.getUser
    this.accessdata = this.accessLogin
    if(this.accessdata == 'admin'){
      return true;
    }
    else{
      return false;
    }
  }
}

