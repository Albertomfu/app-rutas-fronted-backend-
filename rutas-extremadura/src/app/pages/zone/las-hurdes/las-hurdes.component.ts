import { Component, OnInit } from '@angular/core';
import { RutasService } from '../../../shared/rutas.service';
import { Ruta } from '../../../interface/ruta';
@Component({
  selector: 'app-las-hurdes',
  imports: [],
  templateUrl: './las-hurdes.component.html',
  styleUrl: './las-hurdes.component.css',
})
export class LasHurdesComponent implements OnInit {
  rutas: Ruta[] = [];

  constructor(private rutasService: RutasService) {}

  ngOnInit() {
    // Le indicamos explícitamente a Angular que 'todasLasRutas' es un array de tipo Ruta[]
    this.rutasService.getRutas().subscribe((todasLasRutas: Ruta[]) => {
      this.rutas = todasLasRutas.filter(
        (ruta: Ruta) => ruta.zona === 'las-hurdes',
      );
    });
  }
}
