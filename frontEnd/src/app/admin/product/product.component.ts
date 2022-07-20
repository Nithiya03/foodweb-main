import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y/input-modality/input-modality-detector';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminServiceService } from 'src/app/services/admin-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  public product : any = [];
  constructor(private router:Router,private adminService:AdminServiceService) { }

  ngOnInit(): void {
    this.getData();
  }

  private getData(){
    this.adminService.getProduct().subscribe((res:any)=>{
      this.product = res
    });
  }

  public doUpdate(_id : string){
    this.getData();
  }

  public doDelete(_id:string){
    if (confirm('Are you sure to delete this record ?') == true) {

      this.adminService.deleteProduct(_id).subscribe(() => {
      });
      this.getData()
      }
  }
}
