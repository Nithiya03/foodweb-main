import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  accessLogin :string ="";
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
    if(this.accessLogin == 'user'){
      return true;
    }
    else{
      return false;
    }
  }

  accessadmin(){
    this.accessLogin=this.service.getUser
    if(this.accessLogin == 'admin'){
      return true;
    }
    else{
      return false;
    }
  }
}

