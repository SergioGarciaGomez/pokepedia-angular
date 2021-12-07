import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from 'src/app/interfaces/pokemon';
import { AbilityService } from 'src/app/services/ability.service';
import { PokemonService } from 'src/app/services/pokemon.service';
import { GeneralService } from 'src/app/services/general.service';

// PrimeNg
import { MenuItem, PrimeIcons } from 'primeng/api';

@Component({
	selector: 'app-pokedex',
	templateUrl: './pokedex.component.html',
	styleUrls: [ './pokedex.component.scss' ]
})
export class PokedexComponent implements OnInit {

	pokemons: Pokemon[] = [];
	items: MenuItem[] = [];

	constructor(public pokemonService: PokemonService, public abilityService: AbilityService, 
		public generalService: GeneralService, private router: Router) {}

	async ngOnInit() {

		// RECUPERA LOS POKEMONS DEL SERVICIO Y LOS GUARDA EN EL ARRAY POKEMONS
		this.pokemons = await this.pokemonService.getPokemonsFromJson();        

		// Menú desplegable con filtros para las listas de Pokémons
		this.items = [
			{
				label: 'Ordenar por...',
				items: [
					{
						label: 'Número inferior',
						icon: PrimeIcons.SORT_NUMERIC_DOWN,
						command: () => this.ascIdFilter()
					},
					{
						label: 'Número superior',
						icon: PrimeIcons.SORT_NUMERIC_UP,
						command: () => this.descIdFilter()
					},
					{
						label: 'A-Z',
						icon: PrimeIcons.SORT_ALPHA_DOWN,
						command: () => this.ascNameFilter()
						
					},
					{
						label: 'Z-A',
						icon: PrimeIcons.SORT_ALPHA_UP,
						command: () => this.descNameFilter()
					}
				]
			}
		];
	}

	// Navega al Pokémon clickado en función de su ID, si el ID es undefined, simplemente navega a /pokedex
	goPokemonInfo(id: number) {
		this.router.navigateByUrl(`/pokedex${id != undefined ? '/' + id : ''}`);
	}

	// Navega a un Pokémon aleatorio, de entre todos los registrados
	goToRandomPokemon() {
		const id = this.pokemonService.getRandomId() 
		this.router.navigateByUrl(`/pokedex${id != undefined ? '/' + id : ''}`);
	}

	// Filtro por id ascendente
	ascIdFilter() {
		this.pokemonService.ascIdFilter();
	}

	// Filtro por id descendente
	descIdFilter() {
		this.pokemonService.descIdFilter();
	}

	// Filtro por nombre ascendente
	ascNameFilter() {
		this.pokemonService.ascNameFilter();
	}

	// Filtro por nombre descendente
	descNameFilter() {
		this.pokemonService.descNameFilter();
	}
}
