import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  accessLogin: string = '';
  constructor(private service:OrderDetailsService,private loginService:LoginService) { }
  userDetail:any = []
    ngOnInit(){
    this.service.getuserDetails().subscribe((res)=>{
      this.userDetail = res
    },
    (err)=>{
      alert(err)
    })
  }

  access($event : any,id : string){
      this.accessLogin = $event.target.value
    if(this.accessLogin == 'permit'){
      this.loginService.accessData(id,this.accessLogin).subscribe((res)=>{
        console.log(res);
       },(err)=>{
        alert(err)
       })
    }
    else{
      this.loginService.accessData(id,this.accessLogin).subscribe((res)=>{
        console.log(res);
       })
    }    
  }
}
