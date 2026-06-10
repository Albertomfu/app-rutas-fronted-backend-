import { Component, OnInit } from '@angular/core';
import { RutasService } from '../../../shared/rutas.service';
import { Ruta } from '../../../interface/ruta';

@Component({
  selector: 'app-trujillo',
  imports: [],
  templateUrl: './trujillo.component.html',
  styleUrl: './trujillo.component.css',
})
export class TrujilloComponent implements OnInit {
  rutas: Ruta[] = [];

  constructor(private rutasService: RutasService) {}

  ngOnInit() {
    // Le indicamos explícitamente a Angular que 'todasLasRutas' es un array de tipo Ruta[]
    this.rutasService.getRutas().subscribe((todasLasRutas: Ruta[]) => {
      this.rutas = todasLasRutas.filter(
        (ruta: Ruta) => ruta.zona === 'trujillo',
      );
    });
  }
}
