import { Component, OnInit } from '@angular/core';
import { RutasService } from '../../../shared/rutas.service';
import { Ruta } from '../../../interface/ruta';
@Component({
  selector: 'app-sierra-de-gata',
  imports: [],
  templateUrl: './sierra-de-gata.component.html',
  styleUrl: './sierra-de-gata.component.css',
})
export class SierraDeGataComponent implements OnInit {
  rutas: Ruta[] = [];

  constructor(private rutasService: RutasService) {}

  ngOnInit() {
    // Le indicamos explícitamente a Angular que 'todasLasRutas' es un array de tipo Ruta[]
    this.rutasService.getRutas().subscribe((todasLasRutas: Ruta[]) => {
      this.rutas = todasLasRutas.filter(
        (ruta: Ruta) => ruta.zona === 'sierra-de-gata',
      );
    });
  }
}
