import { Component, OnInit, Input, Output , EventEmitter} from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-heroe-targeta',
  templateUrl: './heroe-targeta.component.html',
})
export class HeroeTargetaComponent implements OnInit {
  @Input() heroe:any = {};
  @Input() index:number;
  @Output() heroeSeleccionado:EventEmitter<number>;

  constructor( private router:Router) {
    //console.log("cuando construye =>" + this.index);
    this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit(): void { }

  verHeroe(){
    this.router.navigate(['/heroe',this.index]);
    //console.log(this.index);
    //this.heroeSeleccionado.emit(this.index);
  }

}
