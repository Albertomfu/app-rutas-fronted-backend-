import { Component, OnInit } from '@angular/core';
import { RutasService } from '../../../services/rutas.service';

@Component({
  selector: 'app-campina-sur',
  imports: [],
  templateUrl: './campina-sur.component.html',
  styleUrl: './campina-sur.component.css',
})
export class CampinaSurComponent implements OnInit {
  rutas: any[] = [];
  rutasLocales = [
    {
      nombre: 'Ruta al Castillo de Reina',
      salida: 'Reina',
      llegada: 'Castillo de Reina / Alcazaba',
      km: 3,
      dificultad: 'Fácil',
      duracion: '1 h',
      tipo: 'Circular',
      imagen: 'images/campina-sur/campina-sur-castillo.jpeg',
      maps: 'https://www.google.com/maps/search/Alcazaba+de+Reina+Badajoz',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/reina-alcazaba-badajoz-123521796',
    },
    {
      nombre: 'Ruta Castillo – Pantano – Puente del Ahijón',
      salida: 'Valencia del Ventoso',
      llegada: 'Puente del Ahijón',
      km: 12.7,
      dificultad: 'Fácil',
      duracion: '3 h',
      tipo: 'Circular',
      imagen: 'images/campina-sur/embalse-ahijon.jpg',
      maps: 'https://www.google.com/maps/search/Valencia+del+Ventoso+Badajoz',
      wikiloc:
        'https://el.wikiloc.com/oreibasia-diadromes/ruta-castillo-pantano-puente-del-ahijón-26656997',
    },

    {
      nombre: 'Ruta Mina La Jayona (Monumento Natural)',
      salida: 'La Jayona',
      llegada: 'Monumento Natural Mina La Jayona',
      km: 1.27,
      dificultad: 'Fácil',
      duracion: '1 h',
      tipo: 'Circular',
      imagen: 'images/campina-sur/mina-jayona.jpg',
      maps: 'https://www.google.com/maps/search/Mina+La+Jayona+Badajoz',
      wikiloc:
        'https://es.wikiloc.com/rutas-a-pie/mina-de-la-jayona-monumento-natural-188989346',
    },
    {
      nombre: 'Ruta Montemolín – Monesterio (camino histórico)',
      salida: 'Montemolín',
      llegada: 'Monesterio',
      km: 20.9,
      dificultad: 'Moderada',
      duracion: '4,3 h',
      tipo: 'Circular / IdA y Vuelta',
      imagen: 'images/campina-sur/castillo-montemolin.jpg',
      maps: 'https://www.google.com/maps/search/Montemolín+Badajoz',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/monesterio-montemolin-monesterio-33619761',
    },
    {
      nombre: 'Ruta de las Dehesas de Azuaga',
      salida: 'Azuaga',
      llegada: 'Campiña Sur – Azuaga',
      km: 7.8,
      dificultad: 'Fácil',
      duracion: '2 h',
      tipo: 'Circular',
      imagen: 'images/campina-sur/paisajes-de-la-dehesa.jpg',
      maps: 'https://www.google.com/maps/search/Azuaga+Badajoz',
      wikiloc: 'https://es.wikiloc.com/rutas-a-pe/azuaga-35751560',
    },
    {
      nombre: 'Sendero del Río Matachel',
      salida: 'Alange',
      llegada: 'Ribera del Matachel',
      km: 10.5,
      dificultad: 'Fácil',
      duracion: '2–3 h',
      tipo: 'Circular',
      imagen: 'images/campina-sur/sendero-del-rio-matachel.jpg',
      maps: 'https://www.google.com/maps/search/R%C3%ADo+Matachel+Alange',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/rio-matachel-alange-120561147',
    },
    {
      nombre: 'Vía de la Plata · Monesterio – Fuente de Cantos',
      salida: 'Monesterio',
      llegada: 'Fuente de Cantos',
      km: 21,
      dificultad: 'Media',
      duracion: '4,5 h',
      tipo: 'Lineal',
      imagen: 'images/campina-sur/ruta-via-plata-campina.jpg',
      maps: 'https://www.google.com/maps/search/Monesterio+Fuente+de+Cantos',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/via-de-la-plata-monesterio-fuente-de-cantos-badajoz-6239643',
    },

    {
      nombre: 'Reina – Alcazaba y Miradores',
      salida: 'Reina (Badajoz)',
      llegada: 'Alcazaba de Reina',
      km: 2.8,
      dificultad: 'Fácil',
      duracion: '1 h',
      tipo: 'Circular',
      imagen: 'images/campina-sur/castillo-montemolin.jpg',
      maps: 'https://www.google.com/maps/search/Alcazaba+de+Reina+Badajoz',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/reina-alcazaba-badajoz-123521796',
    },
  ];
  constructor(private rutasService: RutasService) {}

  ngOnInit() {
    this.rutasService.getRutas().subscribe((res: any) => {
      const rutasBackend = res.filter(
        (ruta: any) => ruta.zona === 'campinaSur', // 👈 CLAVE
      );

      // 🔥 UNIMOS TODO
      this.rutas = [...this.rutasLocales, ...rutasBackend];
    });
  }
}
