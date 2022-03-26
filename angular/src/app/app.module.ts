import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { QuisomComponent } from './quisom/quisom.component';
import { CookiesComponent } from './cookies/cookies.component';
import { ContactComponent } from './contact/contact.component';
import { AdopcioComponent } from './adopcio/adopcio.component';
import { TrobatsComponent } from './trobats/trobats.component';
import { PerfilGosComponent } from './perfil-gos/perfil-gos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    QuisomComponent,
    CookiesComponent,
    ContactComponent,
    AdopcioComponent,
    TrobatsComponent,
    PerfilGosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
