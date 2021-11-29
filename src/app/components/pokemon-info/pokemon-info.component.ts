import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from 'src/app/interfaces/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-info',
  templateUrl: './pokemon-info.component.html',
  styleUrls: ['./pokemon-info.component.scss']
})
export class PokemonInfoComponent implements OnInit {

  pokemon: Pokemon = {
    id: 0,
    name: '',
    abilityId: [],
    type: [],
    weakness: [],
    heigth: 0,
    weigth: 0,
    ps: 0,
    attack: 0,
    defense: 0,
    specialAttack: 0,
    specialDefense: 0,
    speed: 0,
    description: ''
  }

  pokemonAnterior: string = "";
  pokemonSiguiente: string = "";

  constructor(public pokemonService: PokemonService, private activatedRoute: ActivatedRoute) { 
  }

  async ngOnInit() {
    
    // EN INICIO, ESPERA A CARGAR EL ARRAY. PARA POR EJEMPLO CUANDO SE ENTRA DIRECTAMENTE DESDE UN ENLACE A
    // ID/5, O CUANDO SE RECARGA LA PÁGINA Y SIGA MOSTRANDO EL CONTENIDO.
    await this.pokemonService.getPokemonsFromJson();

    // RECIBE EL ID DEL POKÉMON CLICKADO Y HACE UN GETPOKEMON(ID) PARA RECIBIRLO
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id != null) {
      this.pokemon = this.pokemonService.getPokemon(+id);// +id lo convierte a number
    }

    this.pokemonAnterior = this.pokemonService.getPokemon(+this.pokemon.id - 1).name;
    this.pokemonSiguiente = this.pokemonService.getPokemon(+this.pokemon.id + 1).name;

  }
}
