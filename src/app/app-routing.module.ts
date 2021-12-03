import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { HomeComponent } from './components/home/home.component';
import { PokedexComponent } from './components/pokedex/pokedex.component';
import { PokemonInfoComponent } from './components/pokemon-info/pokemon-info.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'pokedex', component: PokedexComponent },
  { path: 'pokedex/:id', component: PokemonInfoComponent },
  // CON EL ID DEL POKÉMON CLICKADO Y TE MANDA AL POKEMONINFOCOMPONENT CON LOS DATOS DE DICHO POKÉMON
  { path: 'habilidades', component: HabilidadesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
