import { Injectable } from '@angular/core';
import { Ability } from '../interfaces/ability';

// HTTP LEER JSON
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AbilityService {

  abilities: Ability[] = []

  constructor(private http: HttpClient) {}

  // PROMESA QUE ESPERA A LEER EL JSON Y METERLO EN LA VARIABLE POKEMON
  async getAbilitiesFromJson() {
    this.abilities = await this.http.get('assets/abilities.json').toPromise() as Ability[]
    return this.abilities
  }
}
