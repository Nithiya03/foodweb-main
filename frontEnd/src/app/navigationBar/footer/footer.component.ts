import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public  role !:string |any;
  url: string = 'http://localhost:4200/';
  constructor() { }

  ngOnInit(): void {
  }

  public access(){
    this.role = localStorage.getItem('role')
    if(this.role == 'user' && this.url != window.location.href){
      return true;
    }
    else{
      return false;
    }
  }


}
