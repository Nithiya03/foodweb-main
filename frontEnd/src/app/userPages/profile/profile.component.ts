import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public userEmail! :any;
  public data:any = []
  public email!: string;
  constructor(private service:OrderDetailsService, private param:ActivatedRoute) { }

  ngOnInit(): void{
    this.userEmail = localStorage.getItem('email')
    this.service.getUserEmail(this.userEmail).subscribe((res:any)=>{
      this.data=res     
    })

  }

}
