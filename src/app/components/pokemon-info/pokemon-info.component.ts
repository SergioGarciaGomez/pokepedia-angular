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

  p!: Pokemon;
  pAnterior!: Pokemon;
  pSiguiente!: Pokemon;
  pPrimero!: Pokemon;
  pUltimo!: Pokemon;

  constructor(public pokemonService: PokemonService, private activatedRoute: ActivatedRoute) { 
  }

  async ngOnInit() {
    
    // EN INICIO, ESPERA A CARGAR EL ARRAY. PARA POR EJEMPLO CUANDO SE ENTRA DIRECTAMENTE DESDE UN ENLACE A
    // ID/5, O CUANDO SE RECARGA LA PÁGINA Y SIGA MOSTRANDO EL CONTENIDO.
    await this.pokemonService.getPokemonsFromJson();

    // RECIBE EL ID DEL POKÉMON CLICKADO Y HACE UN GETPOKEMON(ID) PARA RECIBIRLO
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id != null) {
      this.p = this.pokemonService.getPokemon(+id);// +id lo convierte a number
      this.pAnterior = this.pokemonService.getPreviousPokemon(+this.p.id);
      this.pSiguiente = this.pokemonService.getNextPokemon(+this.p.id);
      this.pPrimero = this.pokemonService.getFirstPokemon();
      this.pUltimo = this.pokemonService.getLastPokemon();
    }
  }

  formatId(id: number) {
    this.pokemonService.formatId(id);
  }
}