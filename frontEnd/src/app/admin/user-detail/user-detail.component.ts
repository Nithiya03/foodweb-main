import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  public data!: string|null;
  public userDetail:any = []
  constructor(private service:OrderDetailsService,private loginService:LoginService) { }

  ngOnInit(){
    this.service.getuserDetails().subscribe((res:any)=>{
      this.userDetail = res
      console.log(this.userDetail);
    },
    (err)=>{
      alert(err)
    })
  }
  
  public access($event : any,id : string){
      localStorage.setItem('access',$event.target.value)
      this.data = localStorage.getItem('access')
    if(this.data == 'permit'){
      this.loginService.accessData(id,this.data).subscribe(()=>{
       })
    }
    else{
      this.loginService.accessData(id,this.data).subscribe(()=>{
       })
    }    
  }
}
