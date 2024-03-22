import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Knjiga } from 'src/models/knjiga';
import { User } from 'src/models/user';
import { KnjigaService } from '../knjiga.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-admin-knjige',
  templateUrl: './admin-knjige.component.html',
  styleUrls: ['./admin-knjige.component.css']
})
export class AdminKnjigeComponent implements OnInit {

  constructor(private knjigaService:KnjigaService,private ruter:Router,private userService:UserService) { }

  ngOnInit(): void {

    this.knjigaService.dohvatiKnjige().subscribe((data:Knjiga[])=>{
      this.knjige=data;
    
    this.userService.dohvatiKorisnike().subscribe((data:User[])=>{
      this.korisnici=data;

    })
  })
  }

  knjige:Knjiga[];
  korisnici:User[];
  greska:string;
  pr:Knjiga;

  obrisi(k:Knjiga){
    let p=true;
    for(let i=0;i<this.korisnici.length;i=i+1){
      for(let j=0;j<this.korisnici[i].knjige.length;j=j+1){
        if(this.korisnici[i].knjige[j]==k.id){
          p=false;
          this.pr=k;
        }
      }
    }
    if(p)
    this.knjigaService.obrisi(k.id).subscribe(()=>{
      alert("Књига је успешно обрисана");
      this.ngOnInit();
    })
    else this.greska="Књига је задужена"

  }
  azuriraj(k){
    localStorage.setItem('knjiga',JSON.stringify(k));
    this.ruter.navigate(['azuriraj']);
    
  }
  dodaj(){
    this.ruter.navigate(['dodaj']);
  }

}
