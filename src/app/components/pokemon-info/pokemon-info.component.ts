import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from 'src/app/interfaces/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';
import { GeneralService } from 'src/app/services/general.service';

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

  pAnterior: Pokemon = {
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

  pSiguiente: Pokemon = {
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

  pPrimero: Pokemon = {
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

  pUltimo: Pokemon = {
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

  goPokemonInfo(id: number) {
    this.router.navigateByUrl(`/pokedex/${id != null ? id : ''}`);
    this.ngOnInit()
  }
}
