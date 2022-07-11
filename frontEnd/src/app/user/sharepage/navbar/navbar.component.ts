import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  accessLogin :string|null ="";
  constructor(private service:OrderDetailsService) { }

  ngOnInit(): void {
    const data = localStorage.getItem('token')
    if(data){
      this.logIn()
    }
  }
  
  logIn(){
    return localStorage.getItem('token'); 
  }
  logOut(){
    localStorage.removeItem('role');
    localStorage.removeItem('token');
  }

  accessuser(){
    this.accessLogin = localStorage.getItem('role')
    console.log("access"+this.accessLogin)
    if(this.accessLogin == 'user'){
      return true;
    }
    else{
      return false;
    }
  }

  accessadmin(){
    this.accessLogin = localStorage.getItem('role')
    if(this.accessLogin == 'admin'){
      return true;
    }
    else{
      return false;
    }
  }
}

