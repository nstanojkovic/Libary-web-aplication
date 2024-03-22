import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class KomentarService {

  constructor(private http: HttpClient) { }

  uri='http://localhost:4000'

  dohvatiKomentare(){
    return this.http.get(`${this.uri}/komentari/dohvatiKomentare`);
  }

  dodajKomentar( korisnik,knjiga,komentar,ocena,datum){
    const data = {
     korisnik:korisnik,
     knjiga:knjiga,
     ocena:ocena,
     komentar:komentar,
     datum:datum
    }
    return this.http.post(`${this.uri}/komentari/dodajKomentar`, data);
  }

  azuriraj( korisnik,knjiga,komentar,ocena){
    const data = {
     korisnik:korisnik,
     knjiga:knjiga,
     ocena:ocena,
     komentar:komentar,
     
    }
    return this.http.post(`${this.uri}/komentari/azuriraj`, data);
  }
}
