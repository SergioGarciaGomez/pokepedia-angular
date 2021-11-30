import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ability } from 'src/app/interfaces/ability';
import { Pokemon } from 'src/app/interfaces/pokemon';
import { AbilityService } from 'src/app/services/ability.service';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {

  pokemons: Pokemon[] = []
  abilities: Ability[] = []

  constructor(public pokemonService: PokemonService, 
              public abilityService: AbilityService, 
              private router: Router,) { }

  async ngOnInit() {
    // RECUPERA LOS POKEMONS DEL SERVICIO Y LOS GUARDA EN EL COMPONENTE
    this.pokemons = await this.pokemonService.getPokemonsFromJson()
    
    // RECUPERA LAS HABILIDADES DEL SERVICIO Y LOS GUARDA EN EL COMPONENTE
    this.abilities = await this.abilityService.getAbilitiesFromJson()
  }

  public goPokemonInfo(id: number) {
    this.router.navigateByUrl(`/pokedex${id != undefined ? '/' + id : ''}`);
  }

  goToRandomPokemon() {
    let id =  Math.floor(Math.random() * this.pokemonService.pokemons.length + 1);
    this.router.navigateByUrl(`/pokedex${id != undefined ? '/' + id : ''}`);
  }

  ascIdFilter() {
    this.pokemonService.ascIdFilter()
  }

  descIdFilter() {
    this.pokemonService.descIdFilter()
  }

  ascNameFilter() {
    this.pokemonService.ascNameFilter()
  }

  descNameFilter() {
    this.pokemonService.descNameFilter()
  }
}