import { Component, OnInit } from '@angular/core';
import { Zahtev } from 'src/models/zahtev';
import { Router } from '@angular/router';
import { ZahtevService } from '../zahtev.service';
import { User } from 'src/models/user';
import { UserService } from '../user.service';


@Component({
  selector: 'app-registracija',
  templateUrl: './registracija.component.html',
  styleUrls: ['./registracija.component.css']
})
export class RegistracijaComponent implements OnInit {

  constructor(private ruter:Router,private zahtevService:ZahtevService,private userService:UserService) {
    this.userService.dohvatiKorisnike().subscribe((data: User[])=>{

      this.korisnici = data;
    })

   }

  ngOnInit(): void {
    this.zahtev=new Zahtev();
    this.zahtev.korIme="";
    this.zahtev.adresa="";
    this.zahtev.imePrezime="";
    this.zahtev.lozinka="";
    this.zahtev.mejl="";
    this.zahtev.telefon="";
    this.provera=false;
    this.greska="";
    this.greskaKorIme="";
    this.greskaLozinka="";
    this.potvrdaLozinke="";
    this.greskaPotvdeLozinke="";
    this.greskaMejl="";
    this.zahtev.slika=""
    this.korisnik=(JSON.parse(localStorage.getItem("ulogovan")));
    
  
   }


   korisnik:User;
  zahtev:Zahtev;
  greska:string;
  imageData: string
  selectedFile: File = null
  greskaLozinka:string;
  greskaKorIme:string;
  potvrdaLozinke:string;
  greskaPotvdeLozinke:string;
  greskaAdresa:string;
  

  provera: boolean;

  slika: string;
  korisnici:User[];
  greskaMejl:string;
  greskaTelefon:string;


  onFileSelected(event: any){
    
    if(event.target.files && event.target.files[0]){
    
      
      this.selectedFile = <File>event.target.files[0];

      if(this.selectedFile.type == "image/png" || this.selectedFile.type == "image/jpg" || this.selectedFile.type == "image/jpeg"){
        const reader = new FileReader();
        reader.onload = (e: any) => {
          const image = new Image();
          image.src = e.target.result;
          image.onload = rs => {
         
              this.imageData = e.target.result;
              this.zahtev.slika = this.imageData;
              this.provera = true;

               return true;
         
          }
        }
        reader.readAsDataURL(event.target.files[0]);
      } else {
        alert("Bad image format")
      }
    }
  }

  register(){
    
    let i1=this.proveriLozinku();
    let i2=this.proveriMejl();
    let i3=this.proveriTelefon();

  
     let u:User;
    let i=0;
    let p=false;
    while(this.korisnici[i]){
      if(this.korisnici[i].username==this.zahtev.korIme){
p=true;
break;
      }
      i=i+1;
    }
    if(p){
      this.greskaKorIme=" Постоји корисничко име";
    }
    else{
      if(i1 && i2 && i3)

  if(this.zahtev.adresa!="" && this.zahtev.imePrezime!="" && this.zahtev.lozinka!="" && this.zahtev.mejl!="" && this.zahtev.telefon!=""){
    
    this.zahtevService.dodajZahtev(
      this.zahtev.adresa,this.zahtev.imePrezime,this.zahtev.korIme,this.zahtev.lozinka,this.zahtev.mejl,this.zahtev.telefon,this.zahtev.slika
    ).subscribe((res)=>{
    

      this.ngOnInit();
     // localStorage.clear();
     alert('Регистровано')
      this.ruter.navigate(['registracija']);
      })


   
    } else{
    
      this.greska="Жао нам је али нисте унели све потребне податке";
      
    }
  }

}
  

    proveriLozinku(){
      let lozinkaRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9]).{8,12}$/
      if(!lozinkaRegex.test(this.zahtev.lozinka) && this.zahtev.lozinka!=""){
        this.greskaLozinka = "Лoш формат лозинке"
   
        return false;
      } else { this.greskaLozinka = "" }
      if(this.zahtev.lozinka != this.potvrdaLozinke && this.zahtev.lozinka!=""){
        this.greskaPotvdeLozinke = " Лозинке се не поклапају";
        return false;
      } else { this.greskaPotvdeLozinke = "" }
return true;
    }

    proveriMejl(){
      let mejlRegex = /^.*@.*\..*[a-z]$/
      if(!mejlRegex.test(this.zahtev.mejl) && this.zahtev.mejl!=""){
        this.greskaMejl = "Лош формат мејла";
        return false;

      } else { this.greskaMejl = ""; return true; }
    }
    proveriTelefon(){
      let telefonRegex = /^\d{9,10}$/
      if(!telefonRegex.test(this.zahtev.telefon) && this.zahtev.telefon!=""){
        this.greskaTelefon = "Лош телефонски број";
        return false;
      } else this.greskaTelefon = "";
      return true;
    }

    
    
    dodaj(){
      let i1=this.proveriLozinku();
    let i2=this.proveriMejl();
    let i3=this.proveriTelefon();

  
     let u:User;
    let i=0;
    let p=false;
    while(this.korisnici[i]){
      if(this.korisnici[i].username==this.zahtev.korIme){
p=true;
break;
      }
      i=i+1;
    }
    if(p){
      this.greskaKorIme=" Постоји корисничко име";
    }
    else{
      if(i1 && i2 && i3)
  
    if(this.zahtev.adresa!="" && this.zahtev.imePrezime!="" && this.zahtev.lozinka!="" && this.zahtev.mejl!="" && this.zahtev.telefon!=""){
      
      this.userService.dodajj(this.zahtev.korIme,this.zahtev.lozinka,"citalac",this.zahtev.imePrezime,
      this.zahtev.telefon,this.zahtev.mejl,this.zahtev.adresa,this.zahtev.slika).subscribe(()=>{
   
        this.ngOnInit();
       // localStorage.clear();
        this.ruter.navigate(['registracija']);
        })
  
  
     
      } else{
      
        this.greska="Жао нам је али нисте унели све потребне податке";
        
      }
    }

    }
    
}
