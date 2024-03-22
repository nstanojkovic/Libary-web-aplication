import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ZahtevService {

  constructor(private http: HttpClient) { }

  uri='http://localhost:4000'


  dodajZahtev( adresa,imePrezime,korIme,lozinka,mejl,telefon,slika){
    const data = {
      korIme:korIme,
      adresa:adresa,
      lozinka:lozinka,
      telefon:telefon,
      mejl:mejl,
      imePrezime:imePrezime,
      slika:slika
    }
    return this.http.post(`${this.uri}/zahtevi/dodajZahtev`, data);
  }

  dohvatiSve(){
    return this.http.get(`${this.uri}/zahtevi/dohvatiSve`);
  }

  obrisi(korIme){
    const data={
      korIme:korIme
    }
    return this.http.post(`${this.uri}/zahtevi/obrisi`, data);

  }

  dodajZahtevKnjiga( naziv,zanr,autor,izdavac,godinaIzdavanja,jezik,slika,korisnik){
    const data = {
      naziv:naziv,
      zanr:zanr,
      autor:autor,
      izdavac:izdavac,
      godinaIzdavanja:godinaIzdavanja,
      jezik:jezik,
      slika:slika,
      korisnik:korisnik

     
    }
    return this.http.post(`${this.uri}/zahtevi/dodajZahtevKnjiga`, data);
  }

  dohvatiSvee(){
    return this.http.get(`${this.uri}/zahtevi/dohvatiSvee`);
  }

  obrisii(korIme,naziv){
    const data={
      korIme:korIme,
      naziv:naziv
    }
    return this.http.post(`${this.uri}/zahtevi/obrisii`, data);

  }

}
