import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  navbar: any;
  titol_navbar: any;
  link1: any;
  link2: any;
  link3: any;
  link4: any;
  link5: any;
  link: any;

  constructor() { }

  ngOnInit(): void {
    this.navbar = document.getElementById("navbar_home");
    this.titol_navbar = document.getElementById("titol_navbar");
    this.link = document.getElementById("navbarNavAltMarkup");
    this.link1 = document.getElementById("link1");
    this.link2 = document.getElementById("link2");
    this.link3 = document.getElementById("link3");
    this.link4 = document.getElementById("link4");
    this.link5 = document.getElementById("link5");

    //captures de l'element que es vulgui un event i es pasa a una funcio.
    /*
     * En aquet cas l'event que es captura es el moviment scroll de l'element window,
     * i es pasa la informacio a la funcio scroll que esta més abaix. 
     */
    window.addEventListener('scroll', this.scroll, true);
  }
  ngOnDestroy(): void
  {
    window.removeEventListener('scroll', this.scroll, true);
  }

  
  
  //Lógica per controlar els styles depenent del lloc on es trobi de la pagina.
  scroll = (event: any): void => {
    this.scrollFunction();
  };
  
  scrollFunction() 
  {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) 
    {
      this.navbar.classList.add("bg-light", "shadow");
      this.link.classList.add("bg-light"); 
    } 
    else
    {
      this.navbar.classList.remove("bg-light", "shadow");
      this.link.classList.remove("bg-light");
    }
  }

}
