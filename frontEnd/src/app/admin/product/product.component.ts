import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminServiceService } from 'src/app/services/admin-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  product : any = [];
  constructor(private router:Router,private adminService:AdminServiceService) { }

  ngOnInit(): void {
    this.getData();
  }

  add(){
    this.router.navigate(['addproduct']);
  }

  getData(){
    this.adminService.getProduct().subscribe((res)=>{
      console.log("getdata"+JSON.stringify(res))
      this.product = res
    });
  }
}
