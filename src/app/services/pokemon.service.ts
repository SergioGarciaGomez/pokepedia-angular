import { Injectable, OnInit } from '@angular/core';

//HTTP PARA LEER JSON
import { HttpClient } from '@angular/common/http';

import { Pokemon } from '../interfaces/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  pokemons: Pokemon[] = []

  constructor(private http: HttpClient) {}

  // PROMESA QUE ESPERA A LEER EL JSON Y METERLO EN LA VARIABLE POKEMON
  async getPokemonsFromJson() {
    this.pokemons = await this.http.get('assets/pokemons.json').toPromise() as Pokemon[]
    return this.pokemons
  }
}