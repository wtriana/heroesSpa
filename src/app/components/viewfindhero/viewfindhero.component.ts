import { Component, OnInit } from '@angular/core';
import { HeroesService,Heroe } from "../../services/heroes.services";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-viewfindhero',
  templateUrl: './viewfindhero.component.html',
})
export class ViewfindheroComponent implements OnInit {

  heroes:any[] = [];
  findText:string;

  constructor(
    private _heroesService:HeroesService,
    private activatedRoute:ActivatedRoute ) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(llenganParams =>{
      this.findText = llenganParams['findText'];
      console.log("llegas esto=>" + this.findText);
      this.heroes = this._heroesService.buscarHeroes(llenganParams['findText']);
      console.log(this.heroes);
    })
  }
}
