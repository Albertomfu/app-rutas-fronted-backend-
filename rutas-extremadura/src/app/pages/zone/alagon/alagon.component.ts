import { Component, OnInit } from '@angular/core';
import { RutasService } from '../../../shared/rutas.service';
import { Ruta } from '../../../interface/ruta';

@Component({
  selector: 'app-alagon',
  imports: [],
  templateUrl: './alagon.component.html',
  styleUrl: './alagon.component.css',
})
export class AlagonComponent implements OnInit {
  rutas: Ruta[] = [];

  constructor(private rutasService: RutasService) {}

  ngOnInit() {
    // Le indicamos explícitamente a Angular que 'todasLasRutas' es un array de tipo Ruta[]
    this.rutasService.getRutas().subscribe((todasLasRutas: Ruta[]) => {
      this.rutas = todasLasRutas.filter((ruta: Ruta) => ruta.zona === 'alagon');
    });
  }
}
