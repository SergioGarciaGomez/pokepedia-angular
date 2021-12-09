import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/interfaces/pokemon';

@Component({
  selector: 'app-types-and-weaknesses',
  templateUrl: './types-and-weaknesses.component.html',
  styleUrls: ['./types-and-weaknesses.component.scss']
})
export class TypesAndWeaknessesComponent implements OnInit {

// Pokémon que estamos visualizando pasado desde el padre `pokemon-info`
@Input() pokemon: Pokemon = {
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

  constructor() {}

  async ngOnInit() {}
}
