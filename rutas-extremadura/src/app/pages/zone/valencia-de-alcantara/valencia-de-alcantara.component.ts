import { Component, OnInit } from '@angular/core';
import { RutasService } from '../../../services/rutas.service';

@Component({
  selector: 'app-valencia-de-alcantara',
  imports: [],
  templateUrl: './valencia-de-alcantara.component.html',
  styleUrl: './valencia-de-alcantara.component.css',
})
export class ValenciaDeAlcantaraComponent implements OnInit {
  rutasEstaticas = [
    {
      nombre: 'Ruta de los Dólmenes',
      salida: 'Valencia de Alcántara',
      llegada: 'Valencia de Alcántara',
      km: 9.19,
      dificultad: 'Fácil',
      duracion: '3 h',
      tipo: 'Circular',
      imagen: 'images/valencia-de-alcantara/dolmenes.jpg',
      maps: 'https://www.google.com/maps/search/Valencia+de+Alcántara',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/dolmenes-valencia-de-alcantara-ruta-5-acena-la-borrega-5919277',
    },
    {
      nombre: 'Ruta Puerto Roque',
      salida: 'Valencia de Alcántara',
      llegada: 'Puerto Roque',
      km: 8.96,
      dificultad: 'Media',
      duracion: '2.5 h',
      tipo: 'Circular',
      imagen: 'images/valencia-de-alcantara/puertoroque.jpg',
      maps: 'https://www.google.com/maps/search/Puerto+Roque+Valencia+de+Alcántara',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/puerto-roque-valencia-de-alcantara-5529301',
    },
    {
      nombre: 'Ruta Valencia de Alcántara – Marvão',
      salida: 'Valencia de Alcántara',
      llegada: 'Marvão (Portugal)',
      km: 19.35,
      dificultad: 'Media',
      duracion: '5.30 h',
      tipo: 'Solo Ida',
      imagen: 'images/valencia-de-alcantara/acueducto.jpg',
      maps: 'https://www.google.com/maps/search/Marvão+Portugal',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/valencia-de-alcantara-marvao-17904316',
    },
    {
      nombre: 'Ruta Sierra Fría',
      salida: 'Valencia de Alcántara',
      llegada: 'Sierra Fría',
      km: 22.82,
      dificultad: 'Media',
      duracion: '6.30 h',
      tipo: 'Solo Ida',
      imagen: 'images/valencia-de-alcantara/sierrafria.jpg',
      maps: 'https://www.google.com/maps/search/Sierra+Fría+Valencia+de+Alcántara',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/ruta-de-sierra-fria-la-rabaza-badajoz-2185217',
    },
    {
      nombre: 'Ruta La Fontañera – Frontera',
      salida: 'La Fontañera',
      llegada: 'Frontera España-Portugal',
      km: 11.94,
      dificultad: 'Media',
      duracion: '3 h',
      tipo: 'Circular',
      imagen: 'images/valencia-de-alcantara/fontañera.jpg',
      maps: 'https://www.google.com/maps/search/La+Fontañera+Valencia+de+Alcántara',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/fontanera-marvao-portagem-75806756',
    },
    {
      nombre: 'Ruta del Convento de San Antonio',
      salida: 'Valencia de Alcántara',
      llegada: 'Convento de San Antonio',
      km: 21.66,
      dificultad: 'Media',
      duracion: '4 h',
      tipo: 'Solo Ida',
      imagen: 'images/valencia-de-alcantara/23825030Master.jpg',
      maps: 'https://www.google.com/maps/search/Convento+de+San+Antonio+Valencia+de+Alcántara',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/valencia-de-alcantara-santo-antonio-por-el-fraguil-17092262',
    },
  ];
  // 🔹 RUTAS DINÁMICAS (admin)
  rutasBackend: any[] = [];

  // 🔹 COMBINADAS (las que usa el HTML)
  rutas: any[] = [];

  constructor(private rutasService: RutasService) {}

  ngOnInit() {
    this.rutasService.getRutas().subscribe((res: any) => {
      this.rutasBackend = res.filter(
        (ruta: any) => ruta.zona === 'valenciaDeAlcantara',
      );

      // 🔥 AQUÍ ESTÁ LA CLAVE
      this.rutas = [...this.rutasEstaticas, ...this.rutasBackend];
    });
  }
}
