import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  isClicked: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  toggle(){
    this.isClicked = !this.isClicked;
  }

}
