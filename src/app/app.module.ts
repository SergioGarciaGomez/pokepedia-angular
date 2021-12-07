import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// HTTP PARA LEER JSON
import { HttpClientModule } from '@angular/common/http';

// COMPONENTES
import { AppComponent } from './app.component';
import { ChartStatsComponent } from './components/chart-stats/chart-stats.component';
import { DataAndDescriptionComponent } from './components/data-and-description/data-and-description.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { PokedexComponent } from './components/pokedex/pokedex.component';
import { PokemonInfoComponent } from './components/pokemon-info/pokemon-info.component';
import { TypesAndWeaknessesComponent } from './components/types-and-weaknesses/types-and-weaknesses.component';

// IMPORTS DE PRIMENG
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { PanelMenuModule } from 'primeng/panelmenu';

@NgModule({
  declarations: [
    AppComponent,
    ChartStatsComponent,
    DataAndDescriptionComponent,
    HabilidadesComponent,
    PokedexComponent,
    PokemonInfoComponent,
    TypesAndWeaknessesComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    // Http
    HttpClientModule,
    // PrimeNg
    ButtonModule,
    DialogModule,
    PanelMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
