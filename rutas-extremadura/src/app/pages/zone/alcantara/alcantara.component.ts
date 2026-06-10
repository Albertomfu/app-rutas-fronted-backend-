import { Component, OnInit } from '@angular/core';
import { RutasService } from '../../../shared/rutas.service';
import { Ruta } from '../../../interface/ruta';
@Component({
  selector: 'app-alcantara',
  imports: [],
  templateUrl: './alcantara.component.html',
  styleUrl: './alcantara.component.css',
})
export class AlcantaraComponent implements OnInit {
  rutas: Ruta[] = [];

  constructor(private rutasService: RutasService) {}

  ngOnInit() {
    // Le indicamos explícitamente a Angular que 'todasLasRutas' es un array de tipo Ruta[]
    this.rutasService.getRutas().subscribe((todasLasRutas: Ruta[]) => {
      this.rutas = todasLasRutas.filter(
        (ruta: Ruta) => ruta.zona === 'alcantara',
      );
    });
  }
}
