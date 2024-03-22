
import {OwlModule}from 'ngx-owl-carousel';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FooterComponent } from './footer/footer.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { CitalacComponent } from './citalac/citalac.component';
import { ProfilComponent } from './profil/profil.component';
import { AdminComponent } from './admin/admin.component';
import { PocetnaComponent } from './pocetna/pocetna.component';
import { RegistracijaComponent } from './registracija/registracija.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSelectModule} from '@angular/material/select';
import {MatListModule} from '@angular/material/list';
import { HeaderComponent } from './header/header.component';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';

//import { SlickCarouselModule } from 'ngx-slick-carousel';

import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { PromenaLozinkeComponent } from './promena-lozinke/promena-lozinke.component';
import { PretragaComponent } from './pretraga/pretraga.component';
import { ZaduzeneKnjigeComponent } from './zaduzene-knjige/zaduzene-knjige.component';
import { KnjigaComponent } from './knjiga/knjiga.component';
import {MatRadioModule} from '@angular/material/radio';
import { IstorijaComponent } from './istorija/istorija.component';
import { DodajComponent } from './dodaj/dodaj.component';
import { AzuriranjeComponent } from './azuriranje/azuriranje.component';
import { AdminKnjigeComponent } from './admin-knjige/admin-knjige.component';
import { AdminZahteviComponent } from './admin-zahtevi/admin-zahtevi.component';
import { AdminKorisniciComponent } from './admin-korisnici/admin-korisnici.component';
import { RokComponent } from './rok/rok.component';
import { AzurirajKorisnikComponent } from './azuriraj-korisnik/azuriraj-korisnik.component';
import { AzurirajZahtevComponent } from './azuriraj-zahtev/azuriraj-zahtev.component';
import { ZahtevComponent } from './zahtev/zahtev.component';
import { ZahtevKnjigaComponent } from './zahtev-knjiga/zahtev-knjiga.component';

/*

 "./node_modules/@angular/material/prebuilt-themes/indigo-pink.css",

              "src/styles.css"     
*/
//ovo pisem u style angular.json

//ng add @angular/material
//npm i @angular/material

@NgModule({
  declarations: [
    AppComponent,

    FooterComponent,
    LoginComponent,
    CitalacComponent,
    ProfilComponent,
    CitalacComponent,
    AdminComponent,
    PocetnaComponent,
    RegistracijaComponent,
    HeaderComponent,
    ProfilComponent,
    PromenaLozinkeComponent,
    PretragaComponent,
    ZaduzeneKnjigeComponent,
    KnjigaComponent,
    IstorijaComponent,
    DodajComponent,
    AzuriranjeComponent,
    AdminKnjigeComponent,
    AdminZahteviComponent,
    AdminKorisniciComponent,
    RokComponent,
    AzurirajKorisnikComponent,
    AzurirajZahtevComponent,
    ZahtevComponent,
    ZahtevKnjigaComponent,
    
   
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    HttpClientModule,
    MatIconModule,
    MatSidenavModule,
    MatSelectModule,
    MatListModule,
    MatInputModule,
    MatTableModule,
    MatCardModule,

   // OwlModule,
   // SlickCarouselModule,
    
    MatAutocompleteModule,
    MatRadioModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
