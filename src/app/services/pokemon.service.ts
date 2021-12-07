import { Injectable } from '@angular/core';

// HTTP PARA LEER EL .JSON
import { HttpClient } from '@angular/common/http';

import { Pokemon } from '../interfaces/pokemon';

import { Chart, registerables } from 'chart.js';
import { AbilityService } from './ability.service';
// Necesario para que el chart.js funcione
Chart.register(...registerables);

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  pokemons: Pokemon[] = []

  constructor(private http: HttpClient, private abilityService: AbilityService) {}

  // PROMESA QUE ESPERA A LEER EL JSON Y METERLO EN LA VARIABLE POKEMON
  async getPokemonsFromJson() {
    this.pokemons = await this.http.get('assets/pokemons.json').toPromise() as Pokemon[]
    // Ordenado en ID ascendente por defecto
    this.ascIdFilter()
    return this.pokemons
  }

  ascIdFilter() {
    return this.pokemons.sort((a, b) => a.id - b.id)
  }

  public descIdFilter() {
    return this.pokemons.sort((a, b) => (b.id - a.id))
  }

  public ascNameFilter() {
    this.pokemons.sort(function (a, b) {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    })
    return this.pokemons
  }

  public descNameFilter() {
    this.pokemons.sort(function (a, b) {
      if (a.name < b.name) {
        return 1;
      }
      if (a.name > b.name) {
        return -1;
      }
      return 0;
    })
    return this.pokemons
  }

  // FUNCIÓN QUE DEVUELVE UN POKÉMON QUE, PASÁNDOLE SU ID, DEVUELVE LOS DATOS DEL POKEMON CON DICHO ID
  public getPokemon(id: number): Pokemon {
    return { ...this.pokemons.filter(pokemon => pokemon.id === id)[0] }
  }

  // Coge el valor más pequeño dentro del array y devuelve el pokemon con ese Id, para devolver el primero de la
  // lista
  public getFirstPokemon(): Pokemon {
    let primerId = Math.min(...this.pokemons.map(function(o){ return o.id; }))
    return this.getPokemon(primerId)
  }

  public getLastPokemon(): Pokemon {
    let ultimoId = Math.max(...this.pokemons.map(function(o){ return o.id; }))
    return this.getPokemon(ultimoId)
  }

  public getPreviousPokemon(id: number): Pokemon {

    // Obtengo un array de los id
    const arrayId = this.pokemons.map(array => array.id)
    let position = 0
    
    // En un bucle, si el id es mayor que el id de X posición, significa que aún no hemos llegado a el id
    // del Pokémon que pasamos por parámetro, y eso es lo que queremos, sacar la posición anterior y posterior
    // a ese id. En este caso queremos sacar la posición siguiente, porque queremos sacar el anterior Pokémon,
    // así que a la posición final le hacemos - 1
    for (let x = 0; x < arrayId.length; x++) {
      if (id > arrayId[x]) {
        position++
      }
    }

    // Igualo el Id a la posicion del array, donde estaba el primer valor, justo antes de encontrarse con el Id
    // original
    let newId = arrayId[position - 1]
    
    return this.getPokemon(newId)
  }

  public getNextPokemon(id: number): Pokemon {

    // Obtengo un array de los id
    let arrayId = this.pokemons.map(array => array.id)
    var position = 0
    
    // En este caso queremos sacar la posición siguiente, porque queremos sacar el próximo Pokémon
    // así que a la posición final le hacemos + 1
    for (let x = 0; x < arrayId.length; x++) {
      if (id > arrayId[x]) {
        position++
      }
    }

    // Igualo el Id a la posicion del array, donde estaba el primer valor, justo antes de encontrarse con el Id
    // original
    let newId = arrayId[position + 1]
    
    return this.getPokemon(newId)
  }

  // Obtiene los ID de los pokemons para seleccionar uno aleatoriamente, ya que si lo hiciera directamente con
  // el .lenght del Array principal, si el Array mide 50, y meto el Pokémon número 400, solo saldrán IDs entre
  // 1 y 50, no entre los IDs que hay.
  public getRandomId() {
    // Obtengo un array de los id
    let arrayId = this.pokemons.map(array => array.id)
    // Posición aleatoria en el array de Id's
    return arrayId[Math.floor(Math.random() *arrayId.length)]
  }
}
