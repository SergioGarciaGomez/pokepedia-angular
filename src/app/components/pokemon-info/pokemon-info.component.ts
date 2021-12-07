import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from 'src/app/interfaces/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';
import { GeneralService } from 'src/app/services/general.service';
import { Ability } from 'src/app/interfaces/ability';

@Component({
  selector: 'app-pokemon-info',
  templateUrl: './pokemon-info.component.html',
  styleUrls: ['./pokemon-info.component.scss']
})
export class PokemonInfoComponent implements OnInit {

  /* Diferentes pokemons para mostrar luego en el HTML.

  pokemon es, el pokémon que estamos visualizando.
  pAnterior es, el ID anterior a el pokémon que estamos visualizando(no tiene porqué ser la posición anterior en el array)

  pSiguiente es, el ID siguiente a el pokémon que estamos visualizando(no tiene porqué ser la posición siguiente en el array)

  pPrimero es, el primer pokémon del array, osea, el ID más pequeño (no tiene porqué ser el que tenga ID 1)

  pUltimo es, el último pokémon del array, osea, el ID más grande (no tiene porqué ser igual que el array.lenght)

  Por todas esas limitaciones, he creado una función y variable para cada uno de ellos.
  */
  pokemon: Pokemon = {
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

  pAnterior: Pokemon = {
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

  pSiguiente: Pokemon = {
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

  pPrimero: Pokemon = {
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

  pUltimo: Pokemon = {
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

  abilities: Ability[] = []

  constructor(
    public pokemonService: PokemonService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public generalService: GeneralService
  ) {}


  async ngOnInit() {
    
    // EN INICIO, ESPERA A CARGAR EL ARRAY. PARA POR EJEMPLO CUANDO SE ENTRA DIRECTAMENTE DESDE UN ENLACE A
    // ID/5, O CUANDO SE RECARGA LA PÁGINA Y SIGA MOSTRANDO EL CONTENIDO.
    await this.pokemonService.getPokemonsFromJson();

    // RECIBE EL ID DEL POKÉMON CLICKADO Y HACE UN GETPOKEMON(ID) PARA RECIBIRLO
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id != null) {
      // Carga los diferentes pokémons
      this.pokemon = this.pokemonService.getPokemon(+id);
      this.pAnterior = this.pokemonService.getPreviousPokemon(+id);
      this.pSiguiente = this.pokemonService.getNextPokemon(+id);
      this.pPrimero = this.pokemonService.getFirstPokemon();
      this.pUltimo = this.pokemonService.getLastPokemon();
    }
  }

  formatId(id: number): string {
    return this.generalService.formatId(id)
  }

  // Navega al Pokémon clickado en función de su ID, si el ID es undefined, simplemente navega a /pokedex
  // y refresca el ngOnInit
  goPokemonInfo(id: number) {
    this.router.navigateByUrl(`/pokedex/${id != null ? id : ''}`);
    this.ngOnInit()
  }
}
