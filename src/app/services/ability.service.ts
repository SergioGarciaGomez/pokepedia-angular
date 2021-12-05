import { Injectable } from '@angular/core';
import { Ability } from '../interfaces/ability';

// HTTP LEER JSON
import { HttpClient } from '@angular/common/http';
import { Pokemon } from '../interfaces/pokemon';

@Injectable({
  providedIn: 'root'
})
export class AbilityService {

  abilities: Ability[] = []

  constructor(private http: HttpClient) {}

  // PROMESA QUE ESPERA A LEER EL JSON Y METERLO EN LA VARIABLE POKEMON
  async getAbilitiesFromJson() {
    this.abilities = await this.http.get('assets/abilities.json').toPromise() as Ability[]
    return this.abilities
  }


  public getAbilitiesFromPokemon(pokemon: Pokemon) {

    var arrayAbilityIndex = 0;

    let searchedAbilities: Ability[] = [];

    for (let ability of this.abilities) {

      if (pokemon.abilityId.includes(ability.abilityId)) {
        searchedAbilities.push(this.abilities[arrayAbilityIndex]);
      }

      arrayAbilityIndex++;
    }
    
    return searchedAbilities
  }
}
