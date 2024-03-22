import { Component, OnInit } from '@angular/core';
import { Knjiga } from 'src/models/knjiga';
import { KnjigaService } from '../knjiga.service';


@Component({
  selector: 'app-pocetna',
  templateUrl: './pocetna.component.html',
  styleUrls: ['./pocetna.component.css']
})
export class PocetnaComponent implements OnInit {

  constructor(private knjigaService:KnjigaService) { }

  ngOnInit(): void {
    this.opened=true;
    this.brojac=0;
    
    this.knjigaService.dohvatiKnjige().subscribe((data: Knjiga[])=>{

      this.knjige = data;
      let max=0;
      let maxx=0;


      for(let i=0;i<this.knjige.length-1;i=i+1){
        for(let j=i+1;j<this.knjige.length;j=j+1){
          if(this.knjige[j].brojZaduzenja>this.knjige[i].brojZaduzenja){
            let pom=this.knjige[i];
            this.knjige[i]=this.knjige[j];
            this.knjige[j]=pom;
          }
        }
      }
      for(let i=0;i<3;i=i+1){
        if(this.knjige[i].slika==""){
          this.knjige[i].slika="assets/a.png";
           
         }

        this.slides.push(this.knjige[i]);
      }
   
      this.slide=this.knjige[0];
      


    })
  

  }

  opened:boolean;

 
  slides =[]

  brojac;
 slide;
 knjige:Knjiga[];
 a=[1,2,3];
 b=[7,8];
 c;
 


  addSlide() {
    //this.slides.push(488)
    this.brojac=(this.brojac+1)% this.slides.length;
    
    this.slide=this.slides[this.brojac];
  }




}


