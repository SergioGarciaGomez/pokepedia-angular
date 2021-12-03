import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Chart, registerables } from 'chart.js';
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

	displayTotalPoints: boolean = false;
	displayAverage: boolean = false;
	displayTypicalDeviation: boolean = false;
	@Input() pokemon: Pokemon = {
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


	// pokemon: Pokemon = {
	// 	id: 0,
	// 	name: '',
	// 	abilityId: [],
	// 	type: [],
	// 	weakness: [],
	// 	heigth: 0,
	// 	weigth: 0,
	// 	ps: 0,
	// 	attack: 0,
	// 	defense: 0,
	// 	specialAttack: 0,
	// 	specialDefense: 0,
	// 	speed: 0,
	// 	description: ''
	// };



	constructor(private pokemonService: PokemonService, private activatedRoute: ActivatedRoute, router: Router) {}

	ngOnChanges(changes: SimpleChanges) {

		let { ps, attack, defense, specialAttack, specialDefense, speed } = this.pokemon

		let myChart = new Chart('myChart', {
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

	


	
	totalStatPoints(): number {
		var totalStatPoints: number = 0
		let { ps, attack, defense, specialAttack, specialDefense, speed } = this.pokemon;
		totalStatPoints = ps + attack + defense + specialAttack + specialDefense + speed
		return totalStatPoints
	}

	averagePoints(): number {
		let { ps, attack, defense, specialAttack, specialDefense, speed } = this.pokemon;
		var media = (ps + attack + defense + specialAttack + specialDefense + speed) / 6
		return media
	}

	// La desviación típica se calcula elevando al cuadrado el dato - media (esto con todos los datos)
	// y luego dividiendo entre el número de datos totales, y finalmente la raíz cuadrada del resultado
	typicalDeviation(): number {
		const { ps, attack, defense, specialAttack, specialDefense, speed } = this.pokemon;
		// Media, que es necesaria para la desviación
		const i: number = this.averagePoints()
		const typicalDeviation = Math.sqrt(
			(Math.pow(ps - i, 2) + // 91-100 * 2 = -18
			Math.pow(attack - i, 2) + //134 - 100 * 2 = 68
			Math.pow(defense - i, 2) + //95 - 100 * 2 = -10
			Math.pow(specialAttack - i, 2) + //100 - 100 * 2 = 0
			Math.pow(specialDefense - i, 2) +  // 100 - 100 * 2 = 0
			Math.pow(speed - i, 2) // 80 - 100 * 2 = -40
		) / 6)
		return typicalDeviation
	}

    showTotalPoints() {
        this.displayTotalPoints = true
    }

	showAverage() {
        this.displayAverage = true
    }

	showTypicalDeviation() {
        this.displayTypicalDeviation = true
    }
}
