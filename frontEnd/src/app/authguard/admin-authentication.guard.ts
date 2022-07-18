import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminServiceService } from '../services/admin-service.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthenticationGuard implements CanActivate {
  constructor(private router:Router,private adminService:AdminServiceService){}
  canActivate( route: ActivatedRouteSnapshot,state: RouterStateSnapshot ): boolean {
    if(this.adminService.loggedIn()){
      return true;
    }
    else{
      window.alert("Login needed")
      this.router.navigate(['/admin']);
      return false;
    }
  }
  
}
