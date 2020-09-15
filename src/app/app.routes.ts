//ag-Routes snipper para crear la sintaxis de routes
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { ViewfindheroComponent } from "./components/viewfindhero/viewfindhero.component";
import { FormHeroeComponent } from './components/form-heroe/form-heroe.component';

const ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'heroe/:id', component: HeroeComponent },
  { path: 'buscar/:findText', component: ViewfindheroComponent },
  { path: 'crear', component: FormHeroeComponent },
  { path: '**', pathMatch:'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(ROUTES);

