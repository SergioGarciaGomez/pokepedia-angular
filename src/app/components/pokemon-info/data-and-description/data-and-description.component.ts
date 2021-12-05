import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Ability } from 'src/app/interfaces/ability';
import { Pokemon } from 'src/app/interfaces/pokemon';
import { AbilityService } from 'src/app/services/ability.service';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-data-and-description',
  templateUrl: './data-and-description.component.html',
  styleUrls: ['./data-and-description.component.scss']
})
export class DataAndDescriptionComponent implements OnInit {

  displayAbilityDescription1: boolean = false;
  displayAbilityDescription2: boolean = false;

  @Input() pokemon: Pokemon = {
    id: 0,
    name: '',
    abilityId: [],
    type: [],
    weakness: [],
    height: 0,
    weight: 0,
    ps: 0,
    attack: 0,
    defense: 0,
    specialAttack: 0,
    specialDefense: 0,
    speed: 0,
    description: ''
  }

  abilities: Ability[] = [];


  constructor(public abilityService: AbilityService) { }

  async ngOnInit() {
    this.abilities = await this.abilityService.getAbilitiesFromJson()
  }

  getAbilitiesFromPokemon(pokemon: Pokemon) {
    return this.abilityService.getAbilitiesFromPokemon(pokemon)
  }

  showAbilityDescription1() {
    this.displayAbilityDescription1 = true
  }

  showAbilityDescription2() {
    this.displayAbilityDescription2 = true
  }
}
