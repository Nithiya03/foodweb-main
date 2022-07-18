import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  userEmail! : string;
  constructor(private service:OrderDetailsService) { }

  ngOnInit(): void {
    this.userEmail =this.service.getEmail
    this.service.getuserEmail(this.userEmail).subscribe((res)=>{
      console.log(res);
    })

  }

}
