import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user';
import { Knjiga } from 'src/models/knjiga';
import { Komentar } from 'src/models/komentar';
import { KnjigaService } from '../knjiga.service';
import { KomentarService } from '../komentar.service';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { MatHeaderRow } from '@angular/material/table';
import { getLocaleDateTimeFormat } from '@angular/common';
import { DatePipe } from '@angular/common';
import { DataRowOutlet } from '@angular/cdk/table';
import { Istorija } from 'src/models/istorija';
import { IstorijaService } from '../istorija.service';
import { ZaduzivanjeService } from '../zaduzivanje.service';
import { Zaduzivanje } from 'src/models/zaduzivanja';

@Component({
  selector: 'app-knjiga',
  templateUrl: './knjiga.component.html',
  styleUrls: ['./knjiga.component.css']
})
export class KnjigaComponent implements OnInit {

  constructor(private komentarService:KomentarService,private userService:UserService,private ruter:Router,
    private knjigaService:KnjigaService,private istorijaService:IstorijaService,
    private zaduzivanjeService:ZaduzivanjeService) { }

  ngOnInit(): void {
   this.pipe=new DatePipe('en-US');

   this.greskaZaduzivanje="Не можете да задужите";
   this.b=false;
    this.ocena=0;
    this.komentari=[];
    this.greskaKomentr="Немате право да додате коментар"
this.gkomentar=false;

    this.provera=false;
    this.knjiga=(JSON.parse(localStorage.getItem("knjiga")));
   // localStorage.setItem('knjiga',JSON.stringify(this.knjiga));
    this.korisnik=(JSON.parse(localStorage.getItem("ulogovan")));

    this.knjigaService.dohvatiKnjigu(this.knjiga.id).subscribe((k:Knjiga)=>{
      this.knjiga=k;
      if(this.knjiga.slika==""){
        this.knjiga.slika="assets/a.png"
      }
      this.userService.dohvatiKorisnika(this.korisnik.username).subscribe((k:User)=>{
        this.korisnik=k;
        this.funkcija();
        this.funkcija1();
      })
      
    })



   

    this.komentarService.dohvatiKomentare().subscribe((data: Komentar[])=>{
      
      for(let i=0;i<data.length;i=i+1){
        if(data[i].knjiga==this.knjiga.id){

        
          this.komentari.push(data[i]);
          if(this.korisnik.username==data[i].korisnik){
            this.gkomentar=true;
            //this.greskaKomentr="Ваш коментар постоји"
          }
          
        }
      }
    this.komentari.sort((a,b)=>new Date(b.datum).getTime()-new Date(a.datum).getTime())


    })
    this.ocena=0;
    this.komentar="";
   
    //this.datum=this.pipe.transform(Date.now(),'dd.MM.yyyy,h:mm:ss');

this.istorijaService.dohvati(this.korisnik.username).subscribe((data:Istorija[])=>{
  this.istorija=data;
  for(let i=0;i<data.length;i=i+1){
    if(data[i].knjiga==this.knjiga.id){
this.b=true;
    }
  }
  if(!this.b)this.greskaKomentr="Нисте прочитали књигу"

})
  }

  knjiga:Knjiga;
  korisnik:User;
 
  komentari=[];
  kom:Komentar;
  ocena;
  komentar:string;
  greskaKomentr:string;
  gkomentar:boolean;
  pp;
  datum;
  pipe;
  istorija:Istorija[];
  b:boolean;

  provera:boolean;
  greskaZaduzivanje:string;

  provera1:boolean;
  greskaZaduzivanje1:string;

  provera2:boolean;
  greskaZaduzivanje2:string;

  provera3:boolean;
  greskaZaduzivanje3:string;
  

  
 
 


  potvrdi(){
    if(this.ocena==0 || this.komentar=="" ){

    }else{
      
      
      this.komentarService.dodajKomentar(this.korisnik.username,
        this.knjiga.id,this.komentar,this.ocena, new Date(Date.now())).subscribe(()=>{
          
   var n:number=this.knjiga.brOcena++;
          this.knjigaService.promeniOcenu(this.knjiga.id,(Number(this.ocena)+ n*this.knjiga.ocena)/(Number(this.knjiga.brOcena))
          ).subscribe(()=>{
  
            this.ngOnInit();
            window.location.reload();
          })
         
      })

      

    

    }
  }

p(){

}

funkcija(){

  this.zaduzivanjeService.dohvatiSve().subscribe((zad:Zaduzivanje[])=>{
    for(let i=0;i<zad.length;i=i+1){
      if(zad[i].korisnik==this.korisnik.username ){
        let t= Math.floor((new Date().getTime() - new Date(zad[i].datumVracanja).getTime()) / 1000 / 60 / 60 / 24);
        if(t>0){
          this.provera=true;
          this.greskaZaduzivanje="Нисте вратили књигу на време"
        }
        
      }
    }

  })


}

funkcija1(){
  for(let i=0;i<this.korisnik.knjige.length;i=i+1){
    if(this.korisnik.knjige[i]==this.knjiga.id){
      this.greskaZaduzivanje2="Већ сте задужили књигу"
    this.provera2=true;
    
    }
        }
    
        if(this.korisnik.knjige.length>=3 ){
          this.provera1=true;
          this.greskaZaduzivanje1="Имате 3 књиге"
        }
        
      
        
        
       
        if(this.knjiga.broj==0){
          this.provera3=true;
          this.greskaZaduzivanje3="Тренутно немамо књигу"
        }
}

azuriraj(){
  this.ruter.navigate(['azuriraj'])
}


zaduzi(){
  this.zaduzivanjeService.dodaj(this.knjiga.id,this.korisnik.username).subscribe(()=>{
    alert('Задужено успешно');
    this.ngOnInit();
  })

}


azurirajKom(){
  
  for(let i=0;i<this.komentari.length;i=i+1){
    if(this.komentari[i].korisnik==this.korisnik.username && this.komentari[i].knjiga==this.knjiga.id){
      this.kom=this.komentari[i];
      break;
    }
  }
  if(this.ocena==0 || this.komentar=="" ){
  }
  else
{
 this.komentarService.azuriraj(this.korisnik.username,this.knjiga.id,this.komentar,this.ocena).subscribe(()=>{
  var n:number=this.knjiga.brOcena;
  this.knjigaService.promeniOcenuu(this.knjiga.id,(-Number(this.kom.ocena)+Number(this.ocena)+ n*this.knjiga.ocena)/(Number(this.knjiga.brOcena))
  ).subscribe(()=>{

    this.ngOnInit();
    window.location.reload();
  })
  this.ngOnInit();
 })
}

}
  


}
