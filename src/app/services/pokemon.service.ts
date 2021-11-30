import { Injectable, OnInit } from '@angular/core';

// HTTP PARA LEER EL .JSON
import { HttpClient } from '@angular/common/http';

// IMPORT DE MI INTERFAZ POKEMON
import { Pokemon } from '../interfaces/pokemon';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  pokemons: Pokemon[] = []

  constructor(private http: HttpClient, private router: Router) {}

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

  public formatId(id: number): string {

    var idFormatted: string = "";

    if (id < 10) {
      idFormatted = "00" + id.toString();
    } else if (id >= 10 && id < 100) {
      idFormatted = "0" + id.toString();
    } else {
      idFormatted = id.toString();
    }
    return idFormatted;
  }
}