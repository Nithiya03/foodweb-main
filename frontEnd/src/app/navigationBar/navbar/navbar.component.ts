import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public accessLogin! :string|null;
  url: string = 'http://localhost:4200/';
  constructor(private router:Router) { }

  ngOnInit(): void {
    const data = localStorage.getItem('token')
    if(data){
      this.logIn()
    }
  }
  
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
    if(this.accessLogin == 'user' && this.url != window.location.href ){
      return true;
    }
    else{
      return false;
    }
  }
  public accessadmin(){
    this.accessLogin = localStorage.getItem('role')
    if(this.accessLogin == 'admin' && this.url != window.location.href){
      return true;
    }
    else{
      return false;
    }
  }

}

