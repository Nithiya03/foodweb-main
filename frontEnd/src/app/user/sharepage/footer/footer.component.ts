import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  role !:string |any;

  access(){
    this.role = localStorage.getItem('role')
    if(this.role == 'user'){
      return true;
    }
    else{
      return false;
    }
  }


}
