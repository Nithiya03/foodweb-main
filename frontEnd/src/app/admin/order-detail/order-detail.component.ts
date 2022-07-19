import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from 'src/app/services/admin-service.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {
  public orderData:any = []
  constructor(private adminService:AdminServiceService) { }

  ngOnInit(): void {
    this.getOrderDetails();
  }

  private getOrderDetails(){
    this.adminService.getOrder().subscribe((res)=>{  
      this.orderData = res 
    })
  }


}
``