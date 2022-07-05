import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { OrderDetailsService } from '../services/order-details.service';

@Injectable({
  providedIn: 'root'
})

export class AuthguardGuard implements CanActivate {
  constructor(private router:Router,private service:OrderDetailsService){}
  canActivate( route: ActivatedRouteSnapshot,state: RouterStateSnapshot ): boolean {
    if(this.service.authlog()){
      console.log(1)
      return true;
    }
    else{
      window.alert("After Login the user can Buy products")
      this.router.navigate(['../../login'])
      console.log(2)
      return false;
    }
  }
  
}
