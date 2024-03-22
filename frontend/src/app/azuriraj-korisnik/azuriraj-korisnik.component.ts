import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user';
import { Zahtev } from 'src/models/zahtev';
import { UserService } from '../user.service';

@Component({
  selector: 'app-azuriraj-korisnik',
  templateUrl: './azuriraj-korisnik.component.html',
  styleUrls: ['./azuriraj-korisnik.component.css']
})
export class AzurirajKorisnikComponent implements OnInit {

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.korisnik=(JSON.parse(localStorage.getItem("korisnik")));

    this.userService.dohvatiKorisnika(this.korisnik.username).subscribe((data:User)=>{
      this.korisnik=data;
    })
    
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


  azurirajK(){
  this.userService.azuriraj(this.korisnik.username,this.korisnik.password,this.korisnik.type,this.korisnik.imePrezime,this.korisnik.telefon,
    this.korisnik.mejl,this.korisnik.adresa,this.korisnik.slika).subscribe(()=>{
      alert("Azurirano uspesno");
      this.ngOnInit();
     
    })

  }
  azurirajZ(){

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

}
