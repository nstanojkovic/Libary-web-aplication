import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class IstorijaService {
  constructor(private http: HttpClient) { }

  uri='http://localhost:4000'

  dohvati(korisnik){
    const data={
      korisnik:korisnik

    }
    return this.http.post(`${this.uri}/istorija/dohvati`,data);
  }

  dodaj(knjiga,datumUzimanja,datumVracanja,korisnik,naziv,autor){
    const data={
      korisnik:korisnik,
      knjiga:knjiga,
      datumUzimanja:datumUzimanja,
      datumVracanja:datumVracanja,
      naziv:naziv,
      autor:autor

    }
    return this.http.post(`${this.uri}/istorija/dodaj`,data);
  }

}
