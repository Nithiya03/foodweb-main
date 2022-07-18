import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public  role !:string |any;
  constructor() { }

  ngOnInit(): void {
  }

  public access(){
    this.role = localStorage.getItem('role')
    if(this.role == 'user'){
      return true;
    }
    else{
      return false;
    }
  }


}
