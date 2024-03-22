import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { KnjigaService } from '../knjiga.service';

import { User } from 'src/models/user';
import { Knjiga } from 'src/models/knjiga';
import { Router } from '@angular/router';
import { IstorijaService } from '../istorija.service';
import { ZaduzivanjeService } from '../zaduzivanje.service';
import { Zaduzivanje } from 'src/models/zaduzivanja';

@Component({
  selector: 'app-zaduzene-knjige',
  templateUrl: './zaduzene-knjige.component.html',
  styleUrls: ['./zaduzene-knjige.component.css']
})
export class ZaduzeneKnjigeComponent implements OnInit {

  constructor(private userService:UserService,private knjigaService:KnjigaService,private ruter:Router,
    private istorijaService:IstorijaService,private zaduzivanjeService:ZaduzivanjeService) { }

  ngOnInit(): void {
    this.korisnik=(JSON.parse(localStorage.getItem("ulogovan")));
   this.userService.dohvatiKorisnika(this.korisnik.username).subscribe((k:User)=>{
   this.korisnik=k;
  
 
    for(let i=0;i<this.korisnik.knjige.length;i=i+1){
    this.knjigaService.dohvatiKnjigu(this.korisnik.knjige[i]).subscribe((data: Knjiga)=>{
      if(data){
        this.provera=true;
      }else{
        this.provera=false;
      }
      if(data.slika==""){
        data.slika='assets/a.png'
      }
     this.knjige.push(data);
     this.zaduzivanjeService.dohvati(this.korisnik.username,data.id).subscribe((z:Zaduzivanje)=>{


      this.zaduzivanja.push(this.zad=z);
          })

    })
   

  }
  

})

  }

  korisnik:User;
  knjige=[];
  knjiga:Knjiga;
  niz=[1];
  provera:boolean;
  zad:Zaduzivanje;
  provera1:boolean;
  zaduzivanja=[];
 


skoci(k){
  localStorage.setItem('knjiga',JSON.stringify(k));

  this.ruter.navigate(['knjiga']);

}

razduzi(k:Knjiga){

  let pom=[];
  for(let i=0;i<this.korisnik.knjige.length;i=i+1){
    if(this.korisnik.knjige[i]!=k.id){
pom.push(this.korisnik.knjige[i])
    }
  }

  this.userService.razduziKnjigu(this.korisnik.username,pom,k.id).subscribe(()=>{
    this.zaduzivanjeService.dohvati(this.korisnik.username,k.id).subscribe((z:Zaduzivanje)=>{


      this.zad=z;

      this.istorijaService.dodaj(this.zad.knjiga,this.zad.datumUzimanja,new Date(),this.korisnik.username,k.naziv,k.autor).subscribe(()=>{

        this.zaduzivanjeService.obrisi(this.korisnik.username,k.id).subscribe((z:Zaduzivanje)=>{
          alert("Успешно раздужено");
         window.location.reload();

        })

      })



     
          })
   

 })

}
rok(k:Knjiga){
  let z;
  for(let i=0;i<this.zaduzivanja.length;i=i+1){
if(this.zaduzivanja[i].knjiga==k.id){
z=this.zaduzivanja[i];
break;
}
  }

   
    let t= Math.floor((new Date().getTime() - new Date(z.datumVracanja).getTime()) / 1000 / 60 / 60 / 24);
    if(t<0){
      this.provera1=true;

return t;

    }
    else{ 
      
      
     this.provera1=false;
      return t;

    }
 

  }

produzi(k:Knjiga){
  this.zaduzivanjeService.produzi(k.id,this.korisnik.username).subscribe(()=>{
    alert('produzeno');
    this.knjige=[];
    this.zaduzivanja=[];
this.ngOnInit();
  })
}

proveraProduzi(k:Knjiga){

  for(let i=0;i<this.zaduzivanja.length;i=i+1){
    if(this.zaduzivanja[i].korisnik==this.korisnik.username && this.zaduzivanja[i].knjiga==k.id ){
      if(!this.zaduzivanja[i].rok)
      return true

    }
  }return false;

}



}
