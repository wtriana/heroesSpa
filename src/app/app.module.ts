import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//COMPONETES
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';

//RUTAS
import { APP_ROUTING } from './app.routes';

//SERVICIOS
import { HeroesService } from "./services/heroes.services";
import { HeroeComponent } from './components/heroe/heroe.component';
import { ViewfindheroComponent } from './components/viewfindhero/viewfindhero.component';
import { HeroeTargetaComponent } from './components/heroe-targeta/heroe-targeta.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
    ViewfindheroComponent,
    HeroeTargetaComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
