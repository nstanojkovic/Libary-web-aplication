import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { CitalacComponent } from './citalac/citalac.component';
import { LoginComponent } from './login/login.component';
import { ProfilComponent } from './profil/profil.component';
import { RegistracijaComponent } from './registracija/registracija.component';
import { PocetnaComponent } from './pocetna/pocetna.component';
import { PromenaLozinkeComponent } from './promena-lozinke/promena-lozinke.component';
import { HeaderComponent } from './header/header.component';
import { PretragaComponent } from './pretraga/pretraga.component';
import { ZaduzeneKnjigeComponent } from './zaduzene-knjige/zaduzene-knjige.component';
import { KnjigaComponent } from './knjiga/knjiga.component';
import { IstorijaComponent } from './istorija/istorija.component';
import { DodajComponent } from './dodaj/dodaj.component';
import { AzuriranjeComponent } from './azuriranje/azuriranje.component';

import { AdminComponent } from './admin/admin.component';
import { AdminKnjigeComponent } from './admin-knjige/admin-knjige.component';
import { AdminKorisniciComponent } from './admin-korisnici/admin-korisnici.component';
import { AdminZahteviComponent } from './admin-zahtevi/admin-zahtevi.component';
import { RokComponent } from './rok/rok.component';
import { AzurirajKorisnikComponent } from './azuriraj-korisnik/azuriraj-korisnik.component';
import { AzurirajZahtevComponent } from './azuriraj-zahtev/azuriraj-zahtev.component';
import { ZahtevComponent } from './zahtev/zahtev.component';
import { ZahtevKnjigaComponent } from './zahtev-knjiga/zahtev-knjiga.component';


const routes: Routes = [
  {path:"",component:PocetnaComponent},
  {path:'citalac',component: CitalacComponent},
  {path:'preduzece',component:ProfilComponent},
  {path:"registracija",component:RegistracijaComponent},
  {path:"login",component:LoginComponent},
  {path:"profil",component:ProfilComponent},
  {path:"promenaLozinke",component:PromenaLozinkeComponent},
  {path:"header",component:HeaderComponent},
  {path:"pretraga",component:PretragaComponent},
  {path:"zaduzeneKnjige",component:ZaduzeneKnjigeComponent},
  {path:"knjiga",component:KnjigaComponent},
  {path:"istorija",component:IstorijaComponent},
  {path:"dodaj",component:DodajComponent},
  {path:"azuriraj",component:AzuriranjeComponent},
  {path:"admin",component:AdminComponent},
  {path:"adminKnjige",component:AdminKnjigeComponent},
  {path:"adminKorisnici",component:AdminKorisniciComponent},
  {path:"adminZahtevi",component:AdminZahteviComponent},
  {path:"rok",component:RokComponent},
  {path:"azurirajKorisnika",component:AzurirajKorisnikComponent},
  {path:"azurirajZahtev",component:AzurirajZahtevComponent},
  {path:"zahtev",component:ZahtevComponent},
  {path:"zahtevKnjiga",component:ZahtevKnjigaComponent}


 



  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
