import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from 'src/models/user';


@Component({
  selector: 'app-promena-lozinke',
  templateUrl: './promena-lozinke.component.html',
  styleUrls: ['./promena-lozinke.component.css']
})
export class PromenaLozinkeComponent implements OnInit {

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.greska="";
    this.greskaNLozinka="";
    this.greskaNNLozinka="";

    this.lozinka="";
    this.nnlozinka="";
    this.nlozinka="";


    this.glozinka=false;
    this.gnlozinka=false;
    this.gnnlozinka=false;

    this.korisnik=(JSON.parse(localStorage.getItem("ulogovan")));
    this.userService.dohvatiKorisnika(this.korisnik.username).subscribe((data:User)=>{
      this.korisnik=data;
    })
  
  }
  greskaLozinka:string;
  greskaNLozinka;
  greskaNNLozinka;
  lozinka;
  nlozinka;
  nnlozinka;
  greska;
  korisnik:User;

  glozinka:boolean;
  gnlozinka:boolean;
  gnnlozinka:boolean;
 


  promeni(){
    if(this.lozinka=="" || this.nlozinka=="" || this.nnlozinka==""){
      this.greska="Жао нам је али нисте попунили све податке"
      this.greskaLozinka="";
      this.greskaNLozinka=""
    }
    else{
      this.greska="";
      if(this.lozinka!=this.korisnik.password){
this.glozinka=true;
this.greskaLozinka="Погрешна лозинка"
      }
      else if(this.proveriLozinku()){
        this.userService.promeniLozinku(
          this.korisnik.username,this.nlozinka
        ).subscribe((res)=>{

          this.ngOnInit();

          })
      }
     
    
    }

  }


  proveriLozinku(){
    let lozinkaRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9]).{8,12}$/
    if(!lozinkaRegex.test(this.nlozinka)){
      this.gnlozinka=true;
      this.greskaNLozinka = "Лoш формат лозинке"
      this.greskaLozinka="";
 
      return false;
    } else { this.greskaLozinka = "" }

    if(this.nlozinka != this.nnlozinka ){
      this.greska = " Лозинке се не поклапају";
      this.greskaNLozinka = ""
      return false;
    } 
    return true;

  }

}
