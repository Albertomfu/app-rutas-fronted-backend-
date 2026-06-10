import { Component, OnInit } from '@angular/core';
import { RutasService } from '../../../shared/rutas.service';
import { Ruta } from '../../../interface/ruta';

@Component({
  selector: 'app-tierra-de-barros',
  imports: [],
  templateUrl: './tierra-de-barros.component.html',
  styleUrl: './tierra-de-barros.component.css',
})
export class TierraDeBarrosComponent implements OnInit {
  rutas: Ruta[] = [];

  constructor(private rutasService: RutasService) {}

  ngOnInit() {
    // Le indicamos explícitamente a Angular que 'todasLasRutas' es un array de tipo Ruta[]
    this.rutasService.getRutas().subscribe((todasLasRutas: Ruta[]) => {
      this.rutas = todasLasRutas.filter(
        (ruta: Ruta) => ruta.zona === 'tierra-de-barros',
      );
    });
  }
}
