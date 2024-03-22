import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.korisnik=(JSON.parse(localStorage.getItem("ulogovan")));
    if(this.korisnik.slika==""){
      this.korisnik.slika="assets/s.png"
    }
    
  }

  korisnik:User;
  message;

  login(){

  }

}
