import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/models/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-admin-korisnici',
  templateUrl: './admin-korisnici.component.html',
  styleUrls: ['./admin-korisnici.component.css']
})
export class AdminKorisniciComponent implements OnInit {

  constructor(private userService:UserService,private ruter:Router) { }

  ngOnInit(): void {
    this.userService.dohvatiKorisnike().subscribe((data:User[])=>{
      for(let i=0;i<data.length;i=i+1){
        if(data[i].type!="admin"){
          this.korisnici.push(data[i])
        }
      }

    })
    
  }

  korisnici=[];
  pr:User;
  greska;

  obrisi(k:User){
 if(k.knjige.length>0){
  this.greska="Задужена књига"
this.pr=k;
 }
 else{
  this.userService.obrisi(k.username).subscribe(()=>{
    alert("Успешно обрисано");
    this.korisnici=[];
    this.ngOnInit();
  })
  
 }

  }
  azuriraj(k){

    localStorage.setItem('korisnik',JSON.stringify(k));
   
    this.ruter.navigate(['azurirajKorisnika']);
  }
  dodaj(){
    this.ruter.navigate(['registracija']);

  }

  podigni(i:User){
    this.userService.podigni(i.username).subscribe(()=>{
      this.korisnici=[];
     // alert('podigni');
      this.ngOnInit();
    })

  }

  spusti(i:User){
    this.userService.spusti(i.username).subscribe(()=>{
      // alert('podigni');
      this.korisnici=[];
       this.ngOnInit();
     })

  }
  blokiraj(i:User){
    this.userService.blokiraj(i.username).subscribe(()=>{
      // alert('podigni');
      this.korisnici=[];
       this.ngOnInit();
     })

  }

  odblokiraj(i:User){
    this.userService.odblokiraj(i.username).subscribe(()=>{
      // alert('podigni');
      this.korisnici=[]
       this.ngOnInit();
     })

  }

}
