import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor() { }

  public formatId(id: number): string {

    var idFormatted: string = "";

    if (id < 10) {
      idFormatted = "00" + id.toString();
    } else if (id >= 10 && id < 100) {
      idFormatted = "0" + id.toString();
    } else {
      idFormatted = id.toString();
    }
    return idFormatted;
  }
}
