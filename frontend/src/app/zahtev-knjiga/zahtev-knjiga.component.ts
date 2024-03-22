import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ZahtevKnjiga } from 'src/models/zahtevKnjiga';
import { KnjigaService } from '../knjiga.service';
import { ZahtevService } from '../zahtev.service';

@Component({
  selector: 'app-zahtev-knjiga',
  templateUrl: './zahtev-knjiga.component.html',
  styleUrls: ['./zahtev-knjiga.component.css']
})
export class ZahtevKnjigaComponent implements OnInit {

  constructor(private  zahtevService:ZahtevService,private knjigaService:KnjigaService
    ,private ruter:Router) { }

  ngOnInit(): void {
    this.zahtev=(JSON.parse(localStorage.getItem("zahtevKnjiga")));
    this.zahtevService.dohvatiSvee().subscribe((data:ZahtevKnjiga[])=>{
      for(let i=0;i<data.length;i=i+1){
        if(data[i].naziv==this.zahtev.naziv && data[i].korisnik==this.zahtev.korisnik){
          this.zahtev=data[i];
          break;
        }
      }
    })
    
  }

 
  zahtev:ZahtevKnjiga;
  greska:string;

  azuriraj(){

  }
  potvrdi(){
    let z=this.zahtev;
    this.knjigaService.dodaj(z.naziv,z.autor,z.zanr,z.izdavac,z.godinaIzdavanja,z.jezik,z.slika).subscribe(()=>{
      this.zahtevService.obrisii(z.korisnik,z.naziv).subscribe(()=>{
        alert('Додај');
       /* this.ngOnInit();
        window.location.reload();*/
        this.ruter.navigate(['zahtev']);
      })
  
    })
  
  }

  odbij(){
    let z=this.zahtev;
    this.zahtevService.obrisii(z.korisnik,z.naziv).subscribe(()=>{
      alert('Обриши');
     /* this.ngOnInit();
      window.location.reload();*/
      this.ruter.navigate(['zahtev']);
     
     
    })

  }


}
