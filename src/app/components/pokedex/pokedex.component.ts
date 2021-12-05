import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ability } from 'src/app/interfaces/ability';
import { Pokemon } from 'src/app/interfaces/pokemon';
import { AbilityService } from 'src/app/services/ability.service';
import { PokemonService } from 'src/app/services/pokemon.service';
import { MenuItem, PrimeIcons } from 'primeng/api';
import { GeneralService } from 'src/app/services/general.service';

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

		// RECUPERA LOS POKEMONS DEL SERVICIO Y LOS GUARDA EN EL COMPONENTE
		this.pokemons = await this.pokemonService.getPokemonsFromJson();        

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

	public goPokemonInfo(id: number) {
		this.router.navigateByUrl(`/pokedex${id != undefined ? '/' + id : ''}`);
	}

	goToRandomPokemon() {
		let id = Math.floor(Math.random() * this.pokemonService.pokemons.length + 1);
		this.router.navigateByUrl(`/pokedex${id != undefined ? '/' + id : ''}`);
	}

	ascIdFilter() {
		this.pokemonService.ascIdFilter();
	}

	descIdFilter() {
		this.pokemonService.descIdFilter();
	}

	ascNameFilter() {
		this.pokemonService.ascNameFilter();
	}

	descNameFilter() {
		this.pokemonService.descNameFilter();
	}
}
