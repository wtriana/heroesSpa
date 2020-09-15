import { Component, OnInit } from '@angular/core';
import {  FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: 'app-form-heroe',
  templateUrl: './form-heroe.component.html',
  styleUrls: ['./form-heroe.component.css']
})
export class FormHeroeComponent {

  profileForm = new FormGroup({
    nameHero: new FormControl(''),
    dateHero: new FormControl(''),
    houseHero: new FormControl(''),
    bioHero: new FormControl(''),
  });

  constructor() { }

  onResetform(){
    this.profileForm.reset();
  }

  onSaveForm(){
    console.log(this.profileForm.value);
  }

}
