import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Chart, registerables } from 'chart.js';
import { Pokemon } from 'src/app/interfaces/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';
import { PokemonInfoComponent } from '../pokemon-info/pokemon-info.component';
Chart.register(...registerables);

@Component({
	selector: 'app-chart-base-stats',
	templateUrl: './chart-base-stats.component.html',
	styleUrls: [ './chart-base-stats.component.scss' ]
})
export class ChartBaseStatsComponent implements OnInit {
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
	};

	constructor(private pokemonService: PokemonService, private activatedRoute: ActivatedRoute) {}

	async ngOnInit() {

		// EN INICIO, ESPERA A CARGAR EL ARRAY. PARA POR EJEMPLO CUANDO SE ENTRA DIRECTAMENTE DESDE UN ENLACE A
		// ID/5, O CUANDO SE RECARGA LA PÁGINA Y SIGA MOSTRANDO EL CONTENIDO.
		await this.pokemonService.getPokemonsFromJson();

		// RECIBE EL ID DEL POKÉMON CLICKADO Y HACE UN GETPOKEMON(ID) PARA RECIBIRLO
		const id = this.activatedRoute.snapshot.paramMap.get('id');
		if (id != null) {
			this.pokemon = this.pokemonService.getPokemon(+id); // +id lo convierte a number
		}

    // NUMBERS A MOSTRAR EN EL CHART
    let ps = this.pokemon.ps
    let attack = this.pokemon.attack
    let defense = this.pokemon.defense
    let spAttack = this.pokemon.specialAttack
    let spDefense = this.pokemon.specialDefense
    let speed = this.pokemon.speed

		const myChart = new Chart('myChart', {
			type: 'bar',
			data: {
				labels: [ 'PS', 'Ataque', 'Defensa', 'AtaqueSp', 'DefensaSp', 'Speed' ],
				datasets: [
					{
						label: 'Puntos base',
						data: [ ps, attack, defense, spAttack, spDefense, speed ],
						backgroundColor: [
							'rgba(255, 99, 132, 0.2)',
							'rgba(54, 162, 235, 0.2)',
							'rgba(255, 206, 86, 0.2)',
							'rgba(75, 192, 192, 0.2)',
							'rgba(153, 102, 255, 0.2)',
							'rgba(255, 159, 64, 0.2)'
						],
						borderColor: [
							'rgba(255, 99, 132, 1)',
							'rgba(54, 162, 235, 1)',
							'rgba(255, 206, 86, 1)',
							'rgba(75, 192, 192, 1)',
							'rgba(153, 102, 255, 1)',
							'rgba(255, 159, 64, 1)'
						],
						borderWidth: 1
					}
				]
			},
			options: {
				scales: {
					y: {
						beginAtZero: true,
            max: 255
					}
				}
			}
		});
	}
}