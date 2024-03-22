import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }//moramo da ubacimo klijenta da bi mogli da 
  //saljemo zahteve

  uri='http://localhost:4000'



  login(usernameFromForm, passwordFromForm){
    const data = {
      username: usernameFromForm,
      password: passwordFromForm
    }

    return this.http.post(`${this.uri}/korisnici/login`, data);
  }

  dohvatiKorisnika(usernameFromForm){
    const data = {
      username: usernameFromForm,
     
    }

    return this.http.post(`${this.uri}/korisnici/dohvatiKorisnika`, data);
  }


  


  update(korimee, lozinkaa){
    const data = {
      korime: korimee,
      lozinka: lozinkaa
    }

    return this.http.post(`${this.uri}/korisnici/update`, data);
  }
  dohvatiKorisnike(){
    return this.http.get(`${this.uri}/korisnici/dohvatiKorisnike`);
  }
  promeniLozinku(korimee, lozinkaa){
    const data = {
      korime: korimee,
      lozinka: lozinkaa
    }

    return this.http.post(`${this.uri}/korisnici/promeniLozinku`, data);
  }

  razduziKnjigu(korime,knjige,knjiga){
    const data={
      korime:korime,
      knjige:knjige,
      knjiga:knjiga
    }
    return this.http.post(`${this.uri}/korisnici/razduziKnjigu`, data);
  }

  rok(korime,rok){
    const data={
      korime:korime,
      rok:rok
    }
    return this.http.post(`${this.uri}/korisnici/rok`, data);
  }

  dodaj(username,password,type,imePrezime,telefon,mejl,adresa,slika){
    const data={
      username:username,
      password:password,
      type:type,
      imePrezime:imePrezime,
      telefon:telefon,
      mejl:mejl,
      adresa:adresa,
      slika:slika
    }
    return this.http.post(`${this.uri}/korisnici/dodaj`, data);

  }
  dodajj(username,password,type,imePrezime,telefon,mejl,adresa,slika){
    const data={
      username:username,
      password:password,
      type:type,
      imePrezime:imePrezime,
      telefon:telefon,
      mejl:mejl,
      adresa:adresa,
      slika:slika
    }
    return this.http.post(`${this.uri}/korisnici/dodajj`, data);

  }


  obrisi(username){
    const data={
      username:username
    }
    return this.http.post(`${this.uri}/korisnici/obrisi`, data);

  }

  azuriraj(username,password,type,imePrezime,telefon,mejl,adresa,slika){
    const data={
      username:username,
      password:password,
      type:type,
      imePrezime:imePrezime,
      telefon:telefon,
      mejl:mejl,
      adresa:adresa,
      slika:slika
    }
    return this.http.post(`${this.uri}/korisnici/azuriraj`, data);

  }

  podigni(username){
    const data={
      username:username
    }
    return this.http.post(`${this.uri}/korisnici/podigni`, data);

  }
  spusti(username){
    const data={
      username:username
    }
    return this.http.post(`${this.uri}/korisnici/spusti`, data);
  }

  blokiraj(username){
    const data={
      username:username
    }
    return this.http.post(`${this.uri}/korisnici/blokiraj`, data);
  }

  odblokiraj(username){
    const data={
      username:username
    }
    return this.http.post(`${this.uri}/korisnici/odblokiraj`, data);
  }




}
