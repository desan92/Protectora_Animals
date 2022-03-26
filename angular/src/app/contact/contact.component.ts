import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { formContact } from '../models/formContact.model';
import { ContactService } from '../service/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  form = new FormGroup({
    nom: new FormControl('', [Validators.required, Validators.minLength(2)]),
    email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    missatge: new FormControl('', [Validators.required, Validators.minLength(10)])
  });

  get nom(){ return this.form.get('nom'); }
  get email(){ return this.form.get('email'); }
  get missatge(){ return this.form.get('missatge'); }

  navbar: any;
  link: any;
  emailsmtp: any;

  constructor(private contactService: ContactService) { }

  contacte = new formContact();
  

  enviarEmail(){

    this.contactService.enviarCorreuContacte(this.contacte).subscribe(
      res =>
      {
        alert("Hem rebut la teva sol·licitud de contacte.")
        // this.router.navigate(['/inici']);
      },
      //Control d'errors del servidor
      error =>
      {
        alert("No s'ha pogut enviar la teva sol·licitud de contacte, intenta-ho més tard.");
        // this.router.navigate(['error']);
      }
    )
  }
  

  ngOnInit(): void {
    this.navbar = document.getElementById("navbar_home");
    this.link = document.getElementById("navbarNavAltMarkup");
    
    this.navbar.classList.add("bg-light", "shadow");
    this.link.classList.add("bg-light"); 
  }

}
