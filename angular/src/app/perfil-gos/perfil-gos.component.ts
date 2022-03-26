import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetInfoGossosService } from '../service/get-info-gossos.service';

@Component({
  selector: 'app-perfil-gos',
  templateUrl: './perfil-gos.component.html',
  styleUrls: ['./perfil-gos.component.css']
})
export class PerfilGosComponent implements OnInit {

  id! : number;
  navbar: any;
  link: any;
  gos:any;
  
  constructor(private route:Router, private routeID:ActivatedRoute, private InfoGossosService: GetInfoGossosService) { }

  ngOnInit(): void {

    this.id = this.routeID.snapshot.params['id'];
    this.informacioGos();

    this.navbar = document.getElementById("navbar_home");
    this.link = document.getElementById("navbarNavAltMarkup");
    
    this.navbar.classList.add("bg-light", "shadow");
    this.link.classList.add("bg-light"); 
  }

  informacioGos(){
    
    this.InfoGossosService.infogos(this.id).subscribe(
      res => {
        this.gos = res;
        console.log(this.gos);
      },
      error => {
        alert("S'ha produït un error amb el servidor.");
    });
  }

}
