import { Component, OnInit } from '@angular/core';
import {  FormGroup, FormControl } from "@angular/forms";
import { HeroesService } from "../../services/heroes.services";

@Component({
  selector: 'app-form-heroe',
  templateUrl: './form-heroe.component.html',
  styleUrls: ['./form-heroe.component.css']
})
export class FormHeroeComponent {

  profileForm = new FormGroup({
    name: new FormControl(''),
    release: new FormControl(''),
    familyId: new FormControl(''),
    bio: new FormControl(''),
  });

  newHero:any = {};

  constructor(private _heroesService:HeroesService) {

   }

  onResetform(){
    this.profileForm.reset();
  }

  onSaveForm(){
    this.newHero = this.profileForm.value;
    this.newHero.image = "no-disponible.png";
    if (this.newHero.release) {
      this.newHero.release = this.newHero.release.format('YYYY-MM-DD');
    } else {
      this.newHero.release = "1900-01-01";
    }
    //console.log("saliendo a salvar");
    this._heroesService.saveHero(this.newHero).subscribe((data:any) => {
      //console.log("despues de salvar");
      console.log(data);
    });
  }

}
