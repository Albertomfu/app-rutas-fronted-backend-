import { Component, OnInit } from '@angular/core';
import { RutasService } from '../../../services/rutas.service';

@Component({
  selector: 'app-don-benito',
  imports: [],
  templateUrl: './don-benito.component.html',
  styleUrl: './don-benito.component.css',
})
export class DonBenitoComponent implements OnInit {
  rutas: any[] = [];
  rutasLocales = [
    {
      nombre: 'Paseo del Río Guadiana',
      salida: 'Don Benito',
      llegada: 'Riberas del Guadiana',
      km: 7.43,
      dificultad: 'Moderado',
      duracion: '2,30 h',
      tipo: 'Ida y vuelta',
      imagen: 'images/don-benito/paseo-guadiana.webp',
      maps: 'https://www.google.com/maps/search/Rio+Guadiana+Don+Benito',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/paseo-por-el-rio-guadiana-53653200',
    },
    {
      nombre: 'Ruta del Canal del Zújar',
      salida: 'Don Benito',
      llegada: 'Canal del Zújar',
      km: 16.11,
      dificultad: 'Moderada',
      duracion: '3,30 h',
      tipo: 'Ida y vuelta',
      imagen: 'images/don-benito/canal-zujar.jpg',
      maps: 'https://www.google.com/maps/search/Canal+del+Zujar+Don+Benito',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/ruta-vi-canal-del-zujar-desde-villanueva-de-la-serena-191722025',
    },
    {
      nombre: 'Sendero de las Vegas Altas',
      salida: 'Don Benito',
      llegada: 'Zonas agrícolas del entorno',
      km: 16.39,
      dificultad: 'Fácil',
      duracion: '4 h',
      tipo: 'Ida y vuelta',
      imagen: 'images/don-benito/vegas-altas.jpg',
      maps: 'https://www.google.com/maps/search/Vegas+Altas+Guadiana',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/camino-natural-de-las-vegas-altas-5749329',
    },
    {
      nombre: 'Ruta del Embalse de Orellana',
      salida: 'Orellana la Vieja',
      llegada: 'Embalse de Orellana',
      km: 10.47,
      dificultad: 'Fácil',
      duracion: '3 h',
      tipo: 'Ida y vuelta',
      imagen: 'images/don-benito/embalse-de-orellana.webp',
      maps: 'https://www.google.com/maps/search/Embalse+de+Orellana',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/17-pantano-de-orellana-4475691',
    },
    {
      nombre: 'Sendero de la Isla del Zújar',
      salida: 'Isla del Zujar',
      llegada: 'Río Zújar',
      km: 4.35,
      dificultad: 'Fácil',
      duracion: '1,30 h',
      tipo: 'Solo ida',
      imagen: 'images/don-benito/sendero-zujar.jpg',
      maps: 'https://www.google.com/maps/search/Rio+Zujar',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/senderos-de-la-isla-del-zujar-sl-ba-81-88445',
    },
    {
      nombre: 'Ruta de las Lagunas de Don Benito',
      salida: 'Don Benito',
      llegada: 'Lagunas naturales',
      km: 15.38,
      dificultad: 'Moderado',
      duracion: '3 h',
      tipo: 'Solo ida',
      imagen: 'images/don-benito/lagunas-de-donbenito.jpg',
      maps: 'https://www.google.com/maps/search/Lagunas+de+Don+Benito',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/don-benito-dona-blanca-serrezuela-molino-de-la-boticaria-88824969',
    },
    {
      nombre: 'Sendero del Camino de Magacela',
      salida: 'Villanueva de la Serena',
      llegada: 'Magacela',
      km: 11.83,
      dificultad: 'Moderada',
      duracion: '3 h',
      tipo: 'Solo ida',
      imagen: 'images/don-benito/camino-magacela.jpg',
      maps: 'https://www.google.com/maps/search/Magacela+Badajoz',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/villanueva-de-la-serena-camino-de-magacela-villanueva-12995113',
    },
    {
      nombre: 'Ruta Brujuelo',
      salida: 'Don Benito',
      llegada: 'Cerro de San Cristóbal',
      km: 16,
      dificultad: 'Moderada',
      duracion: '4 h',
      tipo: 'Ida y vuelta',
      imagen: 'images/don-benito/cerro-san-cristobal.jpg',
      maps: 'https://www.google.com/maps/search/Cerro+de+San+Cristobal+Magacela',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/ruta-brujuelo-salinas-de-don-benito-y-lagartijo-cerro-san-cristobal-y-penaflor-investigacion-194905285',
    },
    {
      nombre: 'Ruta de los Molinos del Guadiana',
      salida: 'Don Benito',
      llegada: 'Antiguos molinos',
      km: 19.85,
      dificultad: 'Moderado',
      duracion: '5 h',
      tipo: 'Solo ida',
      imagen: 'images/don-benito/molinos-guadiana.webp',
      maps: 'https://www.google.com/maps/search/Molinos+Guadiana+Don+Benito',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/alcala-del-jucar-molino-de-don-benito-34909801',
    },
  ];

  constructor(private rutasService: RutasService) {}

  ngOnInit() {
    this.rutasService.getRutas().subscribe((res: any) => {
      const rutasBackend = res.filter(
        (ruta: any) => ruta.zona === 'donBenito', // 👈 CLAVE
      );

      // 🔥 UNIMOS TODO
      this.rutas = [...this.rutasLocales, ...rutasBackend];
    });
  }
}
//
