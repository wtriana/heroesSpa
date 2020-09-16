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
      this.findText = this.findText.toUpperCase();
      this._heroesService.buscarHeroes(llenganParams['findText']).subscribe((data:any) => {
        let heroesArray:Heroe[] = [];
        for (const hero of data) {
          let name: any = hero.name.toUpperCase();
          if (name.indexOf(this.findText) >= 0) {
            heroesArray.push(hero);
          }
        }
        this.heroes = heroesArray;
        console.log(this.heroes);
      });
    })
  }
}
