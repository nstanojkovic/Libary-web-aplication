import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.korisnik=(JSON.parse(localStorage.getItem("ulogovan")));
  }

  korisnik:User;

}
