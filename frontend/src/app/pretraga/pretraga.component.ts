import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Knjiga } from 'src/models/knjiga';
import { User } from 'src/models/user';

@Component({
  selector: 'app-pretraga',
  templateUrl: './pretraga.component.html',
  styleUrls: ['./pretraga.component.css']
})
export class PretragaComponent implements OnInit {

  constructor(private ruter :Router) { }

  ngOnInit(): void {
    this.knjige=(JSON.parse(localStorage.getItem("pretraga")));
   this.knjiga=this.knjige[0];

   for(let i=0;i<this.knjige.length;i=i+1){
    if(this.knjige[i].slika==""){
      this.knjige[i].slika="assets/a.png"
    }
   }
    
  }

  knjige:Knjiga[];
  knjiga:Knjiga;
  niz=[1];
  korisnik:User;
 

 /* slikaa(){
    this.korisnik=(JSON.parse(localStorage.getItem("ulogovan")));
   
    if(this.korisnik){
      if(this.korisnik.slika==""){
        this.slika="assets/s.png"
      }else{
        this.slika=this.korisnik.slika;
      }
    }else{
      this.slika="assets/s.png";
    }
  }*/


  proveri(k){
    this.korisnik=(JSON.parse(localStorage.getItem("ulogovan")));
    localStorage.setItem('knjiga',JSON.stringify(k));
  // this.slikaa();
    if(this.korisnik){
      if(!this.korisnik.blokiran)
      this.ruter.navigate(['knjiga']);
      else
      this.ruter.navigate(['pretraga']);
    }
   else
   this.ruter.navigate(['pretraga']);
   
  }
}
