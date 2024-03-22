import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Zahtev } from 'src/models/zahtev';
import { UserService } from '../user.service';
import { ZahtevService } from '../zahtev.service';

@Component({
  selector: 'app-admin-zahtevi',
  templateUrl: './admin-zahtevi.component.html',
  styleUrls: ['./admin-zahtevi.component.css']
})
export class AdminZahteviComponent implements OnInit {

  constructor(private zahteviService:ZahtevService,private userService:UserService,private ruter:Router) { }

  ngOnInit(): void {

    this.zahteviService.dohvatiSve().subscribe((data:Zahtev[])=>{
      this.zahtevi=data;

    })
  }

  zahtevi:Zahtev[];

  dodaj(z:Zahtev){
    this.userService.dodaj(z.korIme,z.lozinka,"citalac",z.imePrezime,z.telefon,z.mejl,z.adresa,z.slika).subscribe(()=>{
      alert("Потврђен захтев");
      this.ngOnInit();
    })
    

  }
  azuriraj(z:Zahtev){
    localStorage.setItem('zahtev',JSON.stringify(z));
    this.ruter.navigate(['azurirajZahtev'])

  }
  obrisi(z){
    this.zahteviService.obrisi(z.korIme).subscribe(()=>{
      alert("Обрисати захтев");
      this.ngOnInit();
    })
  }

}
