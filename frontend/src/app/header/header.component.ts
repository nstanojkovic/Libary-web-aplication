import { ProviderAst } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/models/user';
import { Knjiga } from 'src/models/knjiga';
import { KnjigaService } from '../knjiga.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private ruter:Router, private knjigaService:KnjigaService) {
    
   }

  ngOnInit(): void {
    this.opened=false;
    this.uzmi="registracija";
    this.searchParam="";
   
    this.korisnik=(JSON.parse(localStorage.getItem("ulogovan")));

   
   
  }

  opened:boolean;
  uzmi:string;
  korisnik:User;
  slika:string;
  value:string;
  

  searchParam:string;


   
  pretraga(){
    if(this.searchParam!=""){
  
    this.knjigaService.pretraga(this.searchParam).subscribe((k: Knjiga[])=>{

      this.knjigaService.pretraga1(this.searchParam).subscribe((k1: Knjiga[])=>{
        this.knjigaService.pretraga2(this.searchParam).subscribe((k2: Knjiga[])=>{
       
        for(let i=0;i<k1.length;i=i+1){
          let provera=false;
        for(let j=0;j<k.length;j=j+1){
if(k1[i].id==k[j].id){
  provera=true;
}
        }
        if(!provera){
          k.push(k1[i]);
        }
      }
      
      for(let i=0;i<k2.length;i=i+1){
        let provera=false;
      for(let j=0;j<k.length;j=j+1){
if(k2[i].id==k[j].id){
provera=true;
}
      }
      if(!provera){
        k.push(k2[i]);
      }
    }

    
        localStorage.setItem('pretraga',JSON.stringify(k));
        this.ruter.navigate(['pretraga']). then(() => {
          window.location.reload();

      });
    });


});
    

    })


  }
  }


  pocetna(){
    this.ruter.navigate(['']);
  }
  prijava(){
    this.ruter.navigate(['login']);
  }
  registracija(){
    this.ruter.navigate(['registracija']);
  }
  odjavi(){
    localStorage.clear();
    this.ruter.navigate(['']).
    then(() => {
      window.location.reload();
    });
  }

  proveri(){
    this.korisnik=(JSON.parse(localStorage.getItem("ulogovan")));
    //localStorage.setItem('ulogovan',JSON.stringify(this.korisnik));
   this.slikaa();
    if(this.korisnik){
      return 'profil'
    }
   else
    return 'login'
   
  }
  citalac(){
    this.ruter.navigate(['citalac']);
  }
  profil(){
    this.ruter.navigate(['profil'])
  }
  istorija(){
    localStorage.setItem('provera',JSON.stringify(true));
    this.ruter.navigate(['istorija'])
  }

  provera(){
    this.korisnik=(JSON.parse(localStorage.getItem("ulogovan")));
    
    
  }
  promenaLozinke(){
    this.ruter.navigate(['promenaLozinke'])

  }
  zaduzeneKnjige(){
    this.ruter.navigate(['zaduzeneKnjige']);
  }
dodaj(){
  this.ruter.navigate(['dodaj']);
}

  slikaa(){
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
  }
 

  promeni(){
    if(this.value=="profil"){
      this.value=""
      this.ruter.navigate(['profil']);
    }
    if(this.value=="prLozinka"){
      this.value=""
      this.ruter.navigate(['promenaLozinke']);
    }
    if(this.value=="odjava"){
      this.value=""
      this.odjavi();
    }
  }

  pp(){
    if(this.korisnik){
      if(this.korisnik.type=="citalac" || this.korisnik.type=="moderator")
      return true;
    }
    return false;

  }

  ppp(){
    if(this.korisnik){
      if(this.korisnik.type=="admin")
      return true;
    }
    return false;

  }

  adminKnjige(){
    this.ruter.navigate(['adminKnjige']);
  }
  adminKorisnici(){
    this.ruter.navigate(['adminKorisnici']);
  }
  adminZahtevi(){
    this.ruter.navigate(['adminZahtevi']);
  }
  rok(){
    this.ruter.navigate(['rok']);
  }

 zahtevi(){
  this.ruter.navigate(['zahtev']);
 }

}





