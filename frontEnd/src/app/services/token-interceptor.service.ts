import {HttpHandler,HttpInterceptor,HttpRequest } from '@angular/common/http';
import { Injectable ,Injector} from '@angular/core';
import { OrderDetailsService } from './order-details.service';
import { catchError,throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private orderData:OrderDetailsService, private injector:Injector) { }

  intercept(req:HttpRequest<any>, next:HttpHandler) {
    let injectorService=this.injector.get(OrderDetailsService)
    let reqtoken=req.clone({
      setHeaders:{
        Authorization : `Bearer ${injectorService.getToken()}`

      }
      
    })
      return next.handle(reqtoken).pipe(
        catchError((error)=>{

          return throwError(error);
          
        })
      )
    }
    
  }

