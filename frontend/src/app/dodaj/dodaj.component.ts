import { Component, OnInit } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { Router } from '@angular/router';
import { Knjiga } from 'src/models/knjiga';
import { User } from 'src/models/user';
import { KnjigaService } from '../knjiga.service';
import { ZahtevService } from '../zahtev.service';

@Component({
  selector: 'app-dodaj',
  templateUrl: './dodaj.component.html',
  styleUrls: ['./dodaj.component.css']
})
export class DodajComponent implements OnInit {

  constructor(private knjigaService:KnjigaService,private ruter:Router,
    private zahtevService:ZahtevService) { }

  ngOnInit(): void {
    this.slika="";
    this.naziv="";
    this.autor="";
    this.izdavac="";
    this.jezik="";
    this.o=[];
    
this.greskaGod="";
this.greska="";
this.korisnik=(JSON.parse(localStorage.getItem("ulogovan")));

  }


  selectedFile: File = null;
  naziv:string;
  autor:string;
  zanr:string[];
  izdavac:string;
  godinaIzdavanja:number;
  jezik:string;
  slika:string;
  korisnik:User;


  greska:string;
greskaGod:string;
  
  onFileSelected(event: any){
    
    if(event.target.files && event.target.files[0]){
    
      
      this.selectedFile = <File>event.target.files[0];

      if(this.selectedFile.type == "image/png" || this.selectedFile.type == "image/jpg" || this.selectedFile.type == "image/jpeg"){
        const reader = new FileReader();
        reader.onload = (e: any) => {
          const image = new Image();
          image.src = e.target.result;
          image.onload = rs => {
         
              
              this.slika =  e.target.result;
              //this.provera = true;

               return true;
         
          }
        }
        reader.readAsDataURL(event.target.files[0]);
      } else {
        alert("Bad image format")
      }
    }
  }

  dodaj(){
    this.godina();
    if(this.naziv==""|| this.autor=="" || this.izdavac=="" || this.zanr.length==0 || this.jezik==""){
      this.greska="Жао нам је нисте попунили сва поља"
    }


    else if(this.greskaGod!=""){
//this.greska=this.greskaGod;
this.greskaGod="";
    }
  else
this.knjigaService.dodaj(this.naziv,this.autor,this.zanr,this.izdavac,this.godinaIzdavanja,this.jezik,this.slika).subscribe(()=>{

  this.ngOnInit();
  // localStorage.clear();
   this.ruter.navigate(['dodaj']);

})
  }

  
  godina(){

    if(this.godinaIzdavanja>1950 && this.godinaIzdavanja<=2022)
  {

  }else{
    this.greskaGod="Грешка"
  }
 
  }


 /* changed() {
    if (this.toppings.value.length < 3) {
      this.mySelections = this.toppings.value;
    } else {
      this.toppings.setValue(this.mySelections);
    }
  }*/
  niz=['a','b','x','y'];

  pp(){
    if(this.o.length>2)
    return true;
    else{
      return false;
    }
  }
  o=[];


  dodajZ(){
   
      this.godina();
      if(this.naziv==""|| this.autor=="" || this.izdavac=="" || this.zanr.length==0 || this.jezik==""){
        this.greska="Жао нам је нисте попунили сва поља"
      }
  
  
      else if(this.greskaGod!=""){
  //this.greska=this.greskaGod;
      }
    else
  this.zahtevService.dodajZahtevKnjiga(this.naziv,this.zanr,this.autor,this.izdavac,this.godinaIzdavanja,this.jezik,this.slika,this.korisnik.username).subscribe(()=>{
  this.o=[];
    this.ngOnInit();
   alert('dodato');
     this.ruter.navigate(['dodaj']);
  
  })
    
  }
  sp(a){
    for(let i=0;i<this.zanr.length;i=i+1){
      if(this.zanr[i]==a)return false;
    
    }
    return true;
  }
  
}
