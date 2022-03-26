import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdopcioComponent } from './adopcio/adopcio.component';
import { ContactComponent } from './contact/contact.component';
import { CookiesComponent } from './cookies/cookies.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PerfilGosComponent } from './perfil-gos/perfil-gos.component';
import { QuisomComponent } from './quisom/quisom.component';
import { TrobatsComponent } from './trobats/trobats.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Quisom', component: QuisomComponent },
  { path: 'Cookies', component: CookiesComponent },
  { path: 'Contact', component: ContactComponent },
  { path: 'Adopcio', component: AdopcioComponent },
  { path: 'Trobats', component: TrobatsComponent },
  { path: 'PerfilGos/:id', component: PerfilGosComponent },


  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
