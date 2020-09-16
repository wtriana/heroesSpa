import { Component, OnInit } from '@angular/core';
import { HeroesService,Heroe } from "../../services/heroes.services";
import { Router } from "@angular/router";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[] = [];

  constructor(
              private _heroesService:HeroesService,
              private router:Router
    ) {
    // console.log("iniciando constructor...");
  }

  ngOnInit(){
    this._heroesService.getHeroes()
    .subscribe((data:any)=>{
      this.heroes = data;
    });
  }

  verHeroe(idx:number){
    //console.log('llego a ver heroe: herees component')
    this.router.navigate(['/heroe',idx]);
  }

}
