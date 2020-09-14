import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {

  constructor(private _route:Router) { }

  ngOnInit(): void {
  }

  buscarHeroe(findText:string){
    this._route.navigate(['/buscar',findText]);
  }
}
