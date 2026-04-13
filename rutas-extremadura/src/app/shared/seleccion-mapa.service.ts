import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SeleccionMapaService {
  // Valor inicial null (ninguna zona seleccionada)
  private _selectedZona = new BehaviorSubject<string | null>(null);

  // Observable para que otros componentes se suscriban
  selectedZona$ = this._selectedZona.asObservable();

  // Método para actualizar la zona seleccionada
  selectZona(zona: string) {
    this._selectedZona.next(zona);
  }
}
