import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private dataHeroes:Heroe[] = [];

  urlService :string = 'http://localhost:8081/hero/';

  constructor(private http: HttpClient) {
    console.log('service listo para usarser y ahora con el cliente');
  }

  getHeroes(){
    const headers = new HttpHeaders({});
    return this.http.get(this.urlService, { headers });
  }

  getHeroe(idx:number) {
    const headers = new HttpHeaders({});
    return this.http.get(this.urlService + idx, { headers });
  }

  buscarHeroes(findText:string){
    return this.getHeroes();
  }

  saveHero(newHero){
    const headers = new HttpHeaders({});
    //console.log("salvar heroe");
    //console.log(newHero);
    return this.http.post(this.urlService, newHero ,{ headers });
  }

}

export interface Heroe {
  name    : string;
  bio     : string;
  image   : string;
  release : string;
  familyId: string;
  id?     : number
}
