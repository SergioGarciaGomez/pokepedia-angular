import { Component, OnInit } from '@angular/core';
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

  constructor(public pokemonService: PokemonService, public abilityService: AbilityService) { }

  async ngOnInit() {
    // RECUPERA LOS POKEMONS DEL SERVICIO Y LOS GUARDA EN EL COMPONENTE
    this.pokemons = await this.pokemonService.getPokemonsFromJson()
    console.table(this.pokemons)
    // RECUPERA LAS HABILIDADES DEL SERVICIO Y LOS GUARDA EN EL COMPONENTE
    this.abilities = await this.abilityService.getAbilitiesFromJson()
    console.table(this.abilities)
  }
}