import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public accessLogin! :string|null;
  // public isCollapsed = true;
  navbarCollapsed = true;
  constructor() { }

  ngOnInit(): void {
    const data = localStorage.getItem('token')
    if(data){
      this.logIn()
    }
  }

  // public toggleCollapsed():void {
  //   this.isCollapsed = !this.isCollapsed;
  // }

  public logIn(){
    return localStorage.getItem('token'); 
  }

  public logOut(){
    localStorage.removeItem('email');
    localStorage.removeItem('role');
    localStorage.removeItem('token');
  }

  public accessuser(){
    this.accessLogin = localStorage.getItem('role')
    if(this.accessLogin == 'user'){
      return true;
    }
    else{
      return false;
    }
  }

  public accessadmin(){
    this.accessLogin = localStorage.getItem('role')
    if(this.accessLogin == 'admin'){
      return true;
    }
    else{
      return false;
    }
  }

}

