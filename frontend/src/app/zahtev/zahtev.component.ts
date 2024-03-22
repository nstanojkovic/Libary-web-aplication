import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ZahtevKnjiga } from 'src/models/zahtevKnjiga';
import { KnjigaService } from '../knjiga.service';
import { ZahtevService } from '../zahtev.service';

@Component({
  selector: 'app-zahtev',
  templateUrl: './zahtev.component.html',
  styleUrls: ['./zahtev.component.css']
})
export class ZahtevComponent implements OnInit {

  constructor(private zahtevService:ZahtevService,private knjigaService:KnjigaService,private ruter:Router) {
    this.zahtevService.dohvatiSvee().subscribe((data:ZahtevKnjiga[])=>{
      this.zahtevi=data;
    })
   }

  ngOnInit(): void {
  }
  greska:string;

zahtevi:ZahtevKnjiga[];
  

potvrdi(z:ZahtevKnjiga){
  this.knjigaService.dodaj(z.naziv,z.autor,z.zanr,z.izdavac,z.godinaIzdavanja,z.jezik,z.slika).subscribe(()=>{
    this.zahtevService.obrisii(z.korisnik,z.naziv).subscribe(()=>{
      alert('Додај');
      this.ngOnInit();
      window.location.reload();
    })

  })

}
vidi(z:ZahtevKnjiga){
  localStorage.setItem('zahtevKnjiga',JSON.stringify(z));
    this.ruter.navigate(['zahtevKnjiga']);

}
odbij(z:ZahtevKnjiga){
  this.zahtevService.obrisii(z.korisnik,z.naziv).subscribe(()=>{
    alert('Обриши');
    this.ngOnInit();
    window.location.reload();
   
   
  })

}


}
