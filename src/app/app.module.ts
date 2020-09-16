import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//COMPONETES
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { ViewfindheroComponent } from './components/viewfindhero/viewfindhero.component';
import { HeroeTarjetaComponent } from './components/heroe-tarjeta/heroe-tarjeta.component';
import { FormHeroeComponent } from './components/form-heroe/form-heroe.component';

//RUTAS
import { APP_ROUTING } from './app.routes';

//SERVICIOS
import { HeroesService } from "./services/heroes.services";

//OTROS COMPONENTES
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule , MAT_MOMENT_DATE_ADAPTER_OPTIONS  } from '@angular/material-moment-adapter';
import { AuxiliarComponent } from './components/auxiliar/auxiliar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
    ViewfindheroComponent,
    HeroeTarjetaComponent,
    FormHeroeComponent,
    AuxiliarComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatMomentDateModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    HeroesService,
    {provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: {useUtc: true}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
