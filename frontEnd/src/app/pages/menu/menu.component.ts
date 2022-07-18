import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private service:OrderDetailsService) { }
  foodData:any=[];
  ngOnInit(): void {
    this.service.getAllProduct().subscribe((res)=>{
      this.foodData = res
    },
    (err)=>{
      alert(err)
      
    });
  }

}
