import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public now: Date = new Date();

  isClicked: boolean = false;
  boo: boolean = false;
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

  @HostListener("document:scroll")
  scrollfunction(){
    if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0){
      this.boo = true;
    }
    else{
      this.boo = false;
    }
  }

}
