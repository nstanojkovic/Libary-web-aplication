import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ZaduzivanjeService {

  constructor(private http: HttpClient) { }

  uri='http://localhost:4000'

  dohvati(korisnik,knjiga){
    const data={
      korisnik:korisnik,
      knjiga:knjiga

    }
    return this.http.post(`${this.uri}/zaduzivanja/dohvati`,data);
  }

  obrisi(korisnik,knjiga){
    const data={
      korisnik:korisnik,
      knjiga:knjiga

    }
    return this.http.post(`${this.uri}/zaduzivanja/obrisi`,data);
  }

  dohvatiSve(){
  
    return this.http.get(`${this.uri}/zaduzivanja/dohvatiSve`);
  }

  dodaj(knjiga:number,korisnik:string){
    const data={
      korisnik:korisnik,
      knjiga:knjiga

    }
    return this.http.post(`${this.uri}/zaduzivanja/dodaj`,data);

  }

  produzi(knjiga:number,korisnik:string){
    const data={
      korisnik:korisnik,
      knjiga:knjiga

    }
    return this.http.post(`${this.uri}/zaduzivanja/produzi`,data);

  }
}
