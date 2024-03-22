import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/models/user';
import { Zahtev } from 'src/models/zahtev';
import { UserService } from '../user.service';
import { ZahtevService } from '../zahtev.service';

@Component({
  selector: 'app-azuriraj-zahtev',
  templateUrl: './azuriraj-zahtev.component.html',
  styleUrls: ['./azuriraj-zahtev.component.css']
})
export class AzurirajZahtevComponent implements OnInit {

  constructor(private userService:UserService,private zahtevService:ZahtevService,
    private ruter:Router) { }

  ngOnInit(): void {
    this.zahtev=(JSON.parse(localStorage.getItem("zahtev")));


    
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
  greskaTelefon:string;
  greskaMejl:string;


  azuriraj(){
  this.userService.dodaj(this.zahtev.korIme,this.zahtev.lozinka,'citalac',this.zahtev.imePrezime,this.zahtev.telefon,
    this.zahtev.mejl,this.zahtev.adresa,this.zahtev.slika).subscribe(()=>{
      alert("Потврђено");
      this.ruter.navigate(['adminZahtevi']);
     
    })

  }
  
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
  

               return true;
         
          }
        }
        reader.readAsDataURL(event.target.files[0]);
      } else {
        alert("Лош формат слике")
      }
    }
  }


  obrisi(){
    this.zahtevService.obrisi(this.zahtev.korIme).subscribe(()=>{
      alert("Обрисати захтев");
      this.ruter.navigate(['adminZahtevi']);
    })
  }

}