import { Component, OnInit } from '@angular/core';
import { RutasService } from '../../../services/rutas.service';

@Component({
  selector: 'app-alburquerque',
  imports: [],
  templateUrl: './alburquerque.component.html',
  styleUrl: './alburquerque.component.css',
})
export class AlburquerqueComponent implements OnInit {
  rutas: any[] = [];
  rutasLocales = [
    {
      nombre: 'Ruta del Castillo de Luna y Ermita',
      salida: 'Alburquerque',
      llegada: 'Castillo de Luna',
      km: 4,
      dificultad: 'Fácil',
      duracion: '1,5 h',
      tipo: 'Circular',
      imagen: 'images/alburquerque/79651101Master.jpg',
      maps: 'https://www.google.com/maps/search/Castillo-de-Luna-Alburquerque',
      wikiloc: 'https://es.wikiloc.com/rutas-senderismo/alburquerque-124576436',
    },
    {
      nombre: 'Sierra del Centinela',
      salida: 'Alburquerque',
      llegada: 'Límite fronterizo con Portugal',
      km: 14.28,
      dificultad: 'Fácil',
      duracion: '4 h',
      tipo: 'Lineal',
      imagen: 'images/alburquerque/centinela.jpg',
      maps: 'https://www.google.com/maps/search/Alburquerque',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/alburquerque-sierra-del-centinela-46008643',
    },
    {
      nombre: 'Cruz de San Blas',
      salida: 'Alburquerque',
      llegada: 'Cruz de San Blas',
      km: 6.39,
      dificultad: 'Fácil',
      duracion: '2 h',
      tipo: 'Circular',
      imagen: 'images/alburquerque/sanBlas.jpg',
      maps: 'https://www.google.com/maps/search/Alburquerque',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/cruz-de-san-blas-alburquerque-19762088',
    },
    {
      nombre: 'Ruta del Caserio de los Abuelos',
      salida: 'Alburquerque',
      llegada: 'Antiguo paso fronterizo',
      km: 16.93,
      dificultad: 'Media',
      duracion: '5 h',
      tipo: 'Lineal',
      imagen: 'images/alburquerque/majadalDeRejas.jpg',
      maps: 'https://maps.app.goo.gl/YphfWJcCXPkczvJA6',
      wikiloc:
        'https://eu.wikiloc.com/ibilbide-senderismo/la-campina-de-san-vicente-de-alcantara-2508957',
    },
    {
      nombre: 'Majadal-Valle del Jola',
      salida: 'Alburquerque',
      llegada: 'Antiguos molinos harineros',
      km: 9.03,
      dificultad: 'Fácil',
      duracion: '3,5 h',
      tipo: 'Circular',
      imagen: 'images/alburquerque/valleDeJola.jpg',
      maps: 'https://www.google.com/maps/search/Rio+Gevora',
      wikiloc: 'https://es.wikiloc.com/rutas-senderismo/alburquerque-124576436',
    },
    {
      nombre: 'Ruta de los Miradores de la Sierra',
      salida: 'Alburquerque',
      llegada: 'Miradores naturales',
      km: 19.19,
      dificultad: 'Media',
      duracion: '4 h',
      tipo: 'Circular',
      imagen: 'images/alburquerque/miradores.jpg',
      maps: 'https://www.google.com/maps/search/Miradores+Alburquerque',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/alburquerque-sierra-de-santa-lucia-mirador-el-centinela-moita-san-isidro-la-zarza-alburquerque-128388228',
    },
    {
      nombre: 'Alburquerque - Azagala',
      salida: 'Alburquerque',
      llegada: 'Azagala',
      km: 21.05,
      dificultad: 'Fácil',
      duracion: '5,30 h',
      tipo: 'Circular',
      imagen: 'images/alburquerque/azagala.jpg',
      maps: 'https://www.google.com/maps/search/Fortines+Alburquerque',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/alburquerque-azagala-16010428',
    },
    {
      nombre: 'Ruta de las Encinas Centenarias',
      salida: 'Alburquerque',
      llegada: 'Encinares históricos',
      km: 14.56,
      dificultad: 'Media',
      duracion: '4,3 h',
      tipo: 'Circular',
      imagen: 'images/alburquerque/encinas.jpg',
      maps: 'https://www.google.com/maps/search/Encinas+Alburquerque',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/albuquerque-centinela-y-alcornoque-el-abuelo-70954765',
    },
    {
      nombre: 'Sierra de la Carava y Puente del Notario',
      salida: 'Alburquerque',
      llegada: 'Puente del notario',
      km: 12.85,
      dificultad: 'Media',
      duracion: '3,3 h',
      tipo: 'Circular',
      imagen: 'images/alburquerque/alburquerque1.jpg',
      maps: 'https://www.google.com/maps/search/Arroyo+de+la+Lapa+Alburquerque',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/sierra-de-la-carava-y-puente-del-notario-120595104',
    },
    {
      nombre: 'Alburquerque',
      salida: 'Alburquerque',
      llegada: 'Murallas iluminadas',
      km: 4.09,
      dificultad: 'Media',
      duracion: '2 h',
      tipo: 'Circular',
      imagen: 'images/alburquerque/alburquerque2.jpg',
      maps: 'https://www.google.com/maps/search/Casco+historico+Alburquerque',
      wikiloc: 'https://es.wikiloc.com/rutas-senderismo/alburquerque-124576436',
    },
  ];
  constructor(private rutasService: RutasService) {}

  ngOnInit() {
    this.rutasService.getRutas().subscribe((res: any) => {
      const rutasBackend = res.filter(
        (ruta: any) => ruta.zona === 'alburquerque', // 👈 CLAVE
      );

      // 🔥 UNIMOS TODO
      this.rutas = [...this.rutasLocales, ...rutasBackend];
    });
  }
}
