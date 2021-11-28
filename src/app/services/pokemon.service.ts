import { Injectable, OnInit } from '@angular/core';

// HTTP PARA LEER EL .JSON
import { HttpClient } from '@angular/common/http';

// IMPORT DE MI INTERFAZ POKEMON
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

  // FUNCIÓN QUE DEVUELVE UN POKÉMON QUE, PASÁNDOLE SU ID, DEVUELVE LOS DATOS DEL POKEMON CON DICHO ID
  public getPokemon(id: number): Pokemon {
    return { ...this.pokemons.filter(pokemon => pokemon.id === id)[0] }
  }
}