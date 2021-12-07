import { Component, OnInit } from '@angular/core';
import { Ability } from 'src/app/interfaces/ability';
import { AbilityService } from 'src/app/services/ability.service';
import { GeneralService } from 'src/app/services/general.service';

@Component({
	selector: 'app-habilidades',
	templateUrl: './habilidades.component.html',
	styleUrls: [ './habilidades.component.scss' ]
})
export class HabilidadesComponent implements OnInit {

	abilities: Ability[] = [];

	constructor(public abilityService: AbilityService, private generalService: GeneralService) {}

	async ngOnInit() {

		// RECUPERA LAS HABILIDADES DEL SERVICIO Y LOS GUARDA EN EL ARRAY ABILITIES
		this.abilities = await this.abilityService.getAbilitiesFromJson();
	}

	formatId(id: number): string {
		return this.generalService.formatId(id)
	}
}

