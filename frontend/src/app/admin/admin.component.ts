import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/models/user';
import { Zahtev } from 'src/models/zahtev';
import { UserService } from '../user.service';
import { ZahtevService } from '../zahtev.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private userService:UserService,private ruter:Router,private zahtevService:ZahtevService) { }

  ngOnInit(): void {

    this.greskaKorIme="";
    this.greskaLozinka="";
    this.korisnik=true;
    this.admin=false;
   
    this.greska="Obavezno polje";
    this.username='';
    this.password='';
    this.message='';
   

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

  
  greska:string;

  
  slika: string;

 
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
          
          localStorage.setItem('ulogovan',JSON.stringify(kor));
          this.message="";
          this.greskaKorIme="";
          this.greskaLozinka="";
          if(kor.type=="citalac" || kor.type=="moderator"){
            
          
            this.message="Грешка"
            localStorage.clear();
           
         

          }
     
          if(kor.type=="admin"){
            this.ruter.navigate(['citalac']).
            then(() => {
              window.location.reload();
            });

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

}
