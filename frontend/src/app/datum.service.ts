import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatumService {

  constructor(private http: HttpClient) { }

  uri='http://localhost:4000'

  dohvati(id){
    const data={
      id:id

    }
    return this.http.post(`${this.uri}/datum/dohvati`,data);
  }

  promeni(id,knjiga,datum){
    const data={
      id:id,
      knjiga:knjiga,
datum:datum
    }
    return this.http.post(`${this.uri}/datum/promeni`,data);
  }

  rok(rok){
    const data={
      rok:rok
    }
    return this.http.post(`${this.uri}/datum/rok`,data);
  }
 
}
