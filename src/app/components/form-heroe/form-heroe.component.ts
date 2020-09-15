import { Component, OnInit } from '@angular/core';
import {  FormGroup, FormControl } from "@angular/forms";

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

  constructor() { }

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
    console.log(this.newHero);
  }

}
