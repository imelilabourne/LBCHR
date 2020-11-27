import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public now: Date = new Date();

  isClicked: boolean = false;

  constructor() {
      setInterval(() => {
        this.now = new Date();
      }, 1);
  }
  ngOnInit() {
  }

  toggle(){
    this.isClicked = !this.isClicked;
  }

}
