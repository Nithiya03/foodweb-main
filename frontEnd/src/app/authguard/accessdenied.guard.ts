import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, Router, RouterStateSnapshot } from '@angular/router';
import { RegisterComponent } from '../pages/register/register.component';

@Injectable({
  providedIn: 'root'
})
export class AccessdeniedGuard implements CanDeactivate<RegisterComponent> {
  constructor(private router:Router){}
  canDeactivate(component: RegisterComponent,currentRoute: ActivatedRouteSnapshot,currentState: RouterStateSnapshot,nextState?: RouterStateSnapshot): boolean {

    if(component.userModel.email != null && component.userModel.mobile != null && component.userModel.name != null && component.userModel.password != null){
    }
    return window.confirm("Are you sure? \n If you want to leave the current page");
  }
  
}
