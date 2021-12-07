import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { PokedexComponent } from './components/pokedex/pokedex.component';
import { PokemonInfoComponent } from './components/pokemon-info/pokemon-info.component';

const routes: Routes = [
  // Si el `path` es undefined, navega a `pokedex`
  { path: '', redirectTo: 'pokedex', pathMatch: 'full' },
  { path: 'pokedex', component: PokedexComponent },
  // CON EL ID DEL POKÉMON CLICKADO Y TE MANDA AL POKEMONINFOCOMPONENT CON LOS DATOS DE DICHO POKÉMON
  { path: 'pokedex/:id', component: PokemonInfoComponent },
  { path: 'habilidades', component: HabilidadesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
