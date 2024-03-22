import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class KnjigaService {

  constructor(private http: HttpClient) { }

  uri='http://localhost:4000'

  dohvatiKnjige(){
    return this.http.get(`${this.uri}/knjige/dohvatiKnjige`);
  }

  pretraga(searchParam){
    return this.http.get(`${this.uri}/knjige/pretraga?param=${searchParam}`)
  }

  pretraga1(searchParam){
    return this.http.get(`${this.uri}/knjige/pretraga1?param=${searchParam}`)
  }
  pretraga2(searchParam){
    return this.http.get(`${this.uri}/knjige/pretraga2?param=${searchParam}`)
  }
  dohvatiKnjigu(id){
    const data = {
      id: id
     
    }
    return this.http.post(`${this.uri}/knjige/dohvatiKnjigu`,data);
  }

  promeniOcenu(id,ocena){
    const data = {
      id: id,
      ocena:ocena
     
    }
    return this.http.post(`${this.uri}/knjige/promeniOcenu`,data);
  }
  promeniOcenuu(id,ocena){
    const data = {
      id: id,
      ocena:ocena
     
    }
    return this.http.post(`${this.uri}/knjige/promeniOcenuu`,data);
  }

  dodaj(naziv,autor,zanr,izdavac,godinaIzdavanja,jezik,slika){
    const data={
     naziv:naziv,
     autor:autor,
     zanr:zanr,
     izdavac:izdavac,
     godinaIzdavanja:godinaIzdavanja,
     jezik:jezik,
     slika:slika
    }
    return this.http.post(`${this.uri}/knjige/dodaj`,data);
  }

  azuriraj(id,broj,naziv,autor,zanr,izdavac,godinaIzdavanja,jezik,slika){
    const data={
     naziv:naziv,
     autor:autor,
     zanr:zanr,
     izdavac:izdavac,
     godinaIzdavanja:godinaIzdavanja,
     jezik:jezik,
     slika:slika,
     id:id,
     broj:broj
    }
    return this.http.post(`${this.uri}/knjige/azuriraj`,data);
  }

  obrisi(id){
    const data={
      id:id
    }
    return this.http.post(`${this.uri}/knjige/obrisi`,data);
  }


  


  
}
