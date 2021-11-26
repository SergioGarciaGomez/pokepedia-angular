import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/interfaces/pokemon';
import { POKEMONS } from 'src/app/lists/pokemons-list';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {

  pokemons = POKEMONS

  constructor() { }

  ngOnInit(): void {
  }

}
