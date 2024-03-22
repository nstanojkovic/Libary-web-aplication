import { Component, OnInit, ɵɵqueryRefresh } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/models/user';
import { Zahtev } from 'src/models/zahtev';
import { CitalacComponent } from '../citalac/citalac.component';
import { HeaderComponent } from '../header/header.component';
import { UserService } from '../user.service';
import { ZahtevService } from '../zahtev.service';





@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService:UserService,private ruter:Router,private zahtevService:ZahtevService) { }

  ngOnInit(): void {

    this.greskaKorIme="";
    this.greskaLozinka="";
    this.korisnik=true;
    this.admin=false;
    this.registracija=false;
    this.greska="Obavezno polje";
    this.username='';
    this.password='';
    this.message='';
    this.zahtev=new Zahtev();
    //this.slika=" ";
    this.gKorIme=false;
    this.glozinka=false;
    
   
  }

  gKorIme:boolean;
  glozinka:boolean;

  username: string;
  password: string;
  message: string;
  greskaLozinka:string;
  greskaKorIme:string;
  korisnik:boolean;
  admin:boolean;
  registracija:boolean;
  zahtev:Zahtev;
  greska:string;
  imageData: string
  selectedFile: File = null

  send: boolean

  slika: string

 
    login(){
      if(!this.username){
        this.gKorIme=true;
        this.greskaKorIme="Морате унети корисничко име";
        this.message="";
        if(this.password){
          this.greskaLozinka="";
        }
        
      }
      if(!this.password){
        this.glozinka=true;
        this.greskaLozinka="Морате унети лозинку";
        this.message="";
        if(this.username){
          this.greskaKorIme="";
        }
       
      }
      if(this.username && this.password){
  
      

      this.userService.login(this.username, this.password).subscribe((kor: User)=>{
        if(kor!=null){
          
          
          this.message="";
          this.greskaKorIme="";
          this.greskaLozinka="";
          if(kor.type=="citalac" || kor.type=="moderator"){
            localStorage.setItem('ulogovan',JSON.stringify(kor));
          
          
            this.ruter.navigate(['citalac']).
            then(() => {
              window.location.reload();
            });
         

          }
     
          if(kor.type=="admin"){
           this.message="Грешка";


          }
 
         
        }
        else{
          this.message="Жао нам је, унели сте погрешну шифру иили корисничко име";
          this.greskaKorIme="";
          this.greskaLozinka="";
          
        }
      })

    }

  }
 
  promeniK(){
    this.ngOnInit();
    
    this.admin=false;
    this.registracija=false;
    this.korisnik=true;
    
  }
  promeniA(){
    this.ngOnInit();
    
    this.admin=true;
    this.korisnik=false;
    this.registracija=false;
  }
  promeniR(){
    this.ngOnInit();
    this.admin=false;
    this.korisnik=false;
    this.registracija=true;
  }


  onFileSelected(event: any){
    
    if(event.target.files && event.target.files[0]){
   
      
      this.selectedFile = <File>event.target.files[0];

      if(this.selectedFile.type == "image/png" || this.selectedFile.type == "image/jpg" || this.selectedFile.type == "image/jpeg"){
        const reader = new FileReader();
        reader.onload = (e: any) => {
          const slika = new Image();
          slika.src = e.target.result;
          slika.onload = rs => {
        
              this.imageData = e.target.result;
              this.slika = this.imageData;
              this.send = true;

               return true;
       
          }
        }
        reader.readAsDataURL(event.target.files[0]);
      } else {
        alert("Bad image format")
      }
    }
  }



  
  
    odjavi(){
     
      localStorage.clear();
      this.ruter.navigate(['']).
      then(() => {
        window.location.reload();
      });
  
    }


      
    }
  
  
  

