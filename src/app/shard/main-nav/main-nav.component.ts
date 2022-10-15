import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {

  isOpen = false;
  constructor() { }

  ngOnInit(): void {
  }

  opend(){
    this.isOpen = !this.isOpen;
  }

}
