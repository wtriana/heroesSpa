import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

/*@param HeroesService nombre de la clase
  @param Hero interfaz del objeto heroe*/

import { HeroesService, Heroe } from "../../services/heroes.services";
@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
})
export class HeroeComponent  {

  heroe:Heroe;
  path :string = "assets/img/";

  constructor(private activatedRoute:ActivatedRoute,
              private _heroesService:HeroesService)
    {
      this.activatedRoute.params.subscribe( params => {
        this._heroesService.getHeroe(params['id']).subscribe((data:any)=>{
          this.heroe = data;
        });
    })
   }
}
