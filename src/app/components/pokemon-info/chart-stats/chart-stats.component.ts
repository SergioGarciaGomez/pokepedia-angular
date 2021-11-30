import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Chart, registerables } from 'chart.js';
import { generate } from 'rxjs';
import { Pokemon } from 'src/app/interfaces/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';
// Necesario para que el chart.js funcione
Chart.register(...registerables);

@Component({
	selector: 'app-chart-stats',
	templateUrl: './chart-stats.component.html',
	styleUrls: [ './chart-stats.component.scss' ]
})
export class ChartStatsComponent implements OnChanges {
	@Input() someInput: any;

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

	async ngOnChanges() {
		// if (changes.someInput && changes.someInput.currentValue) {
		// 	this.deleteChart();
		// }

		// EN INICIO, ESPERA A CARGAR EL ARRAY. PARA POR EJEMPLO CUANDO SE ENTRA DIRECTAMENTE DESDE UN ENLACE A
		// ID/5, O CUANDO SE RECARGA LA PÁGINA Y SIGA MOSTRANDO EL CONTENIDO.
		await this.pokemonService.getPokemonsFromJson();

		// RECIBE EL ID DEL POKÉMON CLICKADO Y HACE UN GETPOKEMON(ID) PARA RECIBIRLO
		const id = this.activatedRoute.snapshot.paramMap.get('id');
		if (id != null) {
			this.pokemon = this.pokemonService.getPokemon(+id); // +id lo convierte a number
		}

    let { ps, attack, defense, specialAttack, specialDefense, speed } = this.pokemon;

    var myChart = new Chart('myChart', {
			type: 'bar',
			data: {
				labels: [ 'PS', 'Ataque', 'Defensa', 'AtaqueSp', 'DefensaSp', 'Speed' ],
				datasets: [
					{
						label: 'Puntos base',
						data: [ ps, attack, defense, specialAttack, specialDefense, speed ],
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
						borderWidth: 4
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
