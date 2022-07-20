import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public foodData:any=[];
  constructor(private service:OrderDetailsService) { }

  ngOnInit(): void {
    this.service.getAllProduct().subscribe((res:any)=>{
      this.foodData = res
    })
  }
}
