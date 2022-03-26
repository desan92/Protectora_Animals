import { Component, OnInit } from '@angular/core';
import { GetInfoGossosService } from '../service/get-info-gossos.service';

@Component({
  selector: 'app-trobats',
  templateUrl: './trobats.component.html',
  styleUrls: ['./trobats.component.css']
})
export class TrobatsComponent implements OnInit {

  navbar: any;
  link: any;
  previous: any;
  next: any;
  adopcio:string = 'trobat';
  offset: number = 0;
  gossos: any;
  id:any;
  count: any;
  gossosPagination: any;

  constructor(private InfoGossosService: GetInfoGossosService) { }

  ngOnInit(): void {

    this.informacioGossos();
    // this.infoLastID();
    this.infoCountID();
    // this.paginationNextGossos();
    // this.paginationControl();

    this.navbar = document.getElementById("navbar_home");
    this.link = document.getElementById("navbarNavAltMarkup");
    this.previous = document.getElementById("previous");
    this.next = document.getElementById("next");
    
    this.navbar.classList.add("bg-light", "shadow");
    this.link.classList.add("bg-light"); 
  }

   //Fem un get a la API per obtenir els gossos
  informacioGossos(){
    // console.log(this.details);
    this.InfoGossosService.infogossos(this.adopcio, this.offset).subscribe(
      res => {
        this.gossos = res;
        this.paginationControl();
        // console.log(this.gossos);
      },
      //Control d'errors del servidor
      error => {
        alert("S'ha produït un error amb el servidor.");
    });
  }

  infoLastID(){
    this.InfoGossosService.infoLastIDgos(this.adopcio).subscribe(
      res => {
        this.id = res;
        console.log(this.id);
      },
      //Control d'errors del servidor
      error => {
        alert("S'ha produït un error amb el servidor.");
    });
  }

  infoCountID(){
    this.InfoGossosService.infoCountgos(this.adopcio).subscribe(
      res => {
        this.count = res;
        console.log(this.count);
      },
      //Control d'errors del servidor
      error => {
        alert("S'ha produït un error amb el servidor.");
    });
  }
      
  paginationNextGossos(){
    this.offset = this.offset += 6;
    // console.log(this.offset);
    this.informacioGossos();
    this.paginationControl();
  }

  paginationPreviousGossos(){
    this.offset = this.offset -= 6;
    // console.log(this.offset);
    this.informacioGossos();
    this.paginationControl();
  }

  paginationControl(){
    if(this.offset <= 0)
    {
      this.previous.style.pointerEvents = "none";
      this.previous.style.backgroundColor  = "#C0CFD1";
    }
    else if(this.count < this.offset + 6)
    {
      this.next.style.pointerEvents = "none";
      this.next.style.backgroundColor  = "#C0CFD1";
    }
    else
    {
      this.previous.style.pointerEvents = "auto";
      this.previous.style.backgroundColor  = "white";
      this.next.style.pointerEvents = "auto";
      this.next.style.backgroundColor  = "white";
    }
  }

}
