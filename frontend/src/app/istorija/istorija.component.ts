import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Istorija } from 'src/models/istorija';
import { Knjiga } from 'src/models/knjiga';
import { User } from 'src/models/user';
import { IstorijaService } from '../istorija.service';
import { KnjigaService } from '../knjiga.service';

@Component({
  selector: 'app-istorija',
  templateUrl: './istorija.component.html',
  styleUrls: ['./istorija.component.css']
})
export class IstorijaComponent implements OnInit {

  constructor(private istorijaService:IstorijaService ,private knjigaService:KnjigaService , private ruter:Router) { }

  ngOnInit(): void {
    this.korisnik=(JSON.parse(localStorage.getItem("ulogovan")));
    this.pipe=new DatePipe('en-US');
  
    

   this.istorijaService.dohvati(this.korisnik.username).subscribe((data: Istorija[])=>{

   
 
this.podaci=data;
if(this.pVracena)
this.podaci.sort((a,b)=>new Date(b.datumVracanja).getTime()-new Date(a.datumVracanja).getTime())
else{
  if(!this.pVracena){
    this.podaci.sort((a,b)=>new Date(a.datumVracanja).getTime()-new Date(b.datumVracanja).getTime())
  }
}
if(this.provera){
  if(this.pUzimana)
  this.podaci.sort((a,b)=>new Date(b.datumUzimanja).getTime()-new Date(a.datumUzimanja).getTime())
  else{
    if(!this.pUzimana){
      this.podaci.sort((a,b)=>new Date(a.datumUzimanja).getTime()-new Date(b.datumUzimanja).getTime())
    }
  }
  this.provera=false;
}
if(this.provera1){
  if(this.pNaziv)
  this.podaci.sort((a,b)=>a.naziv < b.naziv ? -1 : a.naziv > b.naziv ? 1 : 0)
  else{
    if(!this.pNaziv){
      this.podaci.sort((a,b)=>a.naziv < b.naziv ? 1 : a.naziv > b.naziv ? -1 : 0)
    }
  }
  this.provera1=false;
}
if(this.provera2){
  if(this.pAutor)
  this.podaci.sort((a,b)=>a.autor < b.autor ? -1 : a.autor > b.autor ? 1 : 0)
  else{
    if(!this.pAutor){
      this.podaci.sort((a,b)=>a.autor < b.autor ? 1 : a.autor > b.autor ? -1 : 0)
    }
  }
  this.provera2=false;
}


   })
   
  }


  podaci=[];
  podaci1=[];
  korisnik:User;
  pipe;

  pVracena:boolean=true;

  pUzimana:boolean=false;
  provera:boolean=false;

  provera1:boolean=false;
  pNaziv:boolean=false;

  provera2:boolean=false;
  pAutor:boolean=false;


  

  promeni(k){
    this.korisnik=(JSON.parse(localStorage.getItem("ulogovan")));
    this.knjigaService.dohvatiKnjigu(k).subscribe((k:Knjiga)=>{
      localStorage.setItem('knjiga',JSON.stringify(k));
      if(this.korisnik){
        this.ruter.navigate(['knjiga']);
      }
     else
     this.ruter.navigate(['istorija']);
    })  
     
    }

    
  // this.slikaa();
  sortDatumVracanja(){
    

    this.pVracena=!this.pVracena;
    this.ngOnInit();



  }
  sortDatumUzimanja(){
    this.provera=true;
    this.pUzimana=!this.pUzimana;
    this.ngOnInit();
    
  }
  sortNaziv(){
    this.provera1=true;
    this.pNaziv=!this.pNaziv;
    this.ngOnInit();

  }
  sortAutor(){
    this.provera2=true;
    this.pAutor=!this.pAutor;
    this.ngOnInit();
  }


 
    d(datum){

   /* let date = new Date(datum);
     date.setDate( date.getDate() + 14 );
     return  this.pipe.transform(new Date(date), 'dd/MM/yyyy');

    */
     return  this.pipe.transform(new Date(datum), 'dd/MM/yyyy');

    }

  
  

 
}

