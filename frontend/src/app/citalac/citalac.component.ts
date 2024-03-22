import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user';
import { UserService } from '../user.service';
import { Knjiga } from 'src/models/knjiga';
import { KnjigaService } from '../knjiga.service';
import { DatePipe, getLocaleDateFormat } from '@angular/common';
import { DataSource } from '@angular/cdk/collections';
import { DatumService } from '../datum.service';
import { Datum } from 'src/models/datum';
import { Router } from '@angular/router';
import { ZaduzivanjeService } from '../zaduzivanje.service';
import { Zaduzivanje } from 'src/models/zaduzivanja';

@Component({
  selector: 'app-citalac',
  templateUrl: './citalac.component.html',
  styleUrls: ['./citalac.component.css']
})
export class CitalacComponent implements OnInit {

  constructor(private userService:UserService,private knjigaService:KnjigaService,private datumService:DatumService,
    private ruter:Router,private zaduzivanjaService:ZaduzivanjeService) { 
    
  }

  ngOnInit(): void {
     this.korisnik = JSON.parse(localStorage.getItem('ulogovan'));
     this.promenaLozinke=false;
     this.poruka="";

     this.knjigaService.dohvatiKnjige().subscribe((data: Knjiga[])=>{

      this.datumService.dohvati(1).subscribe((d:Datum)=>{
        let t= Math.floor((new Date().getTime() - new Date(d.datum).getTime()) / 1000 / 60 / 60 / 24);

        if(t==0){
          for(let i=0;i<data.length;i=i+1){
            if(data[i].id==d.knjiga){
              this.knjiga=data[i];
            }
          }

        }else{

          this.knjige = data;
          this.knjiga=this.knjige[Math.floor(Math.random() * data.length)];
          this.datumService.promeni(1,this.knjiga.id,new Date()).subscribe((e)=>{

          })
        }
        if(this.knjiga.slika==""){
          this.knjiga.slika="assets/a.png"
        }


      })


  //  this.slika=this.knjiga.slika;

    
     })
     this.zaduzivanjaService.dohvatiSve().subscribe((data:Zaduzivanje[])=>{

      this.zaduzivanja=data;
     })
   

     this.g1="";
  
     this.g3="";
     this.g4="";
  }

  korisnik:User;
  lozinka:String;
  promenaLozinke:boolean;
  lozinka1:string;
  poruka:String;
  knjige:Knjiga[];
  knjiga:Knjiga;
  slika:string;
  id:number;

  zaduzivanja:Zaduzivanje[];

  g1:string;

  g3:string;
  g4:string;
 
 

ppp;



proveri(){
  this.korisnik=(JSON.parse(localStorage.getItem("ulogovan")));
  localStorage.setItem('knjiga',JSON.stringify(this.knjiga));
// this.slikaa();
  if(this.korisnik){
    if(!this.korisnik.blokiran)
    this.ruter.navigate(['knjiga']);
    else
    this.ruter.navigate(['citalac']);
  }
 else
 this.ruter.navigate(['citalac']);
 
}

provera(){

  for(let i=0;i<this.zaduzivanja.length;i=i+1){
    if(this.zaduzivanja[i].korisnik==this.korisnik.username){
      let t= Math.floor((new Date().getTime() - new Date(this.zaduzivanja[i].datumVracanja).getTime()) / 1000 / 60 / 60 / 24);
      if(t>=-2 && t<0){
        this.g1="Рок истиче"
      }
      if(t>0){
        this.g1="Рок је истекао"
      }
    }
  }
  if(this.korisnik.knjige.length==3){
    this.g3="Имате 3 задужене књиге"
  }
  if(this.korisnik.blokiran){
    this.g4="Блокирани сте";
  }
  else{
    this.g4="";
  }
  if(this.g1=="" && this.g3=="" && this.g4==""){
    return false;
  }else return true;
}



}
