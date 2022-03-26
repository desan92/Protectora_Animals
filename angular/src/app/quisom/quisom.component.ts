import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quisom',
  templateUrl: './quisom.component.html',
  styleUrls: ['./quisom.component.css']
})
export class QuisomComponent implements OnInit {

  navbar: any;
  link: any;

  constructor() { }

  ngOnInit(): void {
    this.navbar = document.getElementById("navbar_home");
    this.link = document.getElementById("navbarNavAltMarkup");
    
    this.navbar.classList.add("bg-light", "shadow");
    this.link.classList.add("bg-light"); 
  }

}
