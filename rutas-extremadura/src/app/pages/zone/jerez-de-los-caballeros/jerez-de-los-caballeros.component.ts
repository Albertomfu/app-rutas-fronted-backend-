import { Component } from '@angular/core';

@Component({
  selector: 'app-jerez-de-los-caballeros',
  imports: [],
  templateUrl: './jerez-de-los-caballeros.component.html',
  styleUrl: './jerez-de-los-caballeros.component.css',
})
export class JerezDeLosCaballerosComponent {
  rutas = [
    {
      nombre: 'Ruta Monumental del Casco Histórico',
      salida: 'Plaza de España',
      llegada: 'Murallas y Alcázar',
      km: 3,
      dificultad: 'Fácil',
      duracion: '1,5 h',
      tipo: 'Circular',
      imagen: 'images/jerez-de-los-caballeros/jerez-historico.jpg',
      maps: 'https://www.google.com/maps/search/Casco+Historico+Jerez+de+los+Caballeros',
      wikiloc:
        'https://www.wikiloc.com/hiking-trails/castillo-de-reina-desde-reina-5080676',
    },
    {
      nombre: 'Ruta del Alcázar Templario',
      salida: 'Centro histórico',
      llegada: 'Alcázar y murallas',
      km: 2,
      dificultad: 'Fácil',
      duracion: '1 h',
      tipo: 'Circular',
      imagen: 'images/jerez-de-los-caballeros/jerezcaballeros.jpg',
      maps: 'https://www.google.com/maps/search/Alcazar+Jerez+de+los+Caballeros',
      wikiloc:
        'https://www.wikiloc.com/hiking-trails/castillo-de-reina-desde-reina-5080676',
    },
    {
      nombre: 'Sendero del Río Ardila',
      salida: 'Área recreativa del Ardila',
      llegada: 'Riberas del río Ardila',
      km: 6,
      dificultad: 'Fácil',
      duracion: '2 h',
      tipo: 'Ida y vuelta',
      imagen: 'images/jerez-de-los-caballeros/rio-ardila.jpg',
      maps: 'https://www.google.com/maps/search/Rio+Ardila+Jerez+de+los+Caballeros',
      wikiloc:
        'https://www.wikiloc.com/hiking-trails/castillo-de-reina-desde-reina-5080676',
    },
    {
      nombre: 'Ruta de las Ermitas',
      salida: 'Jerez de los Caballeros',
      llegada: 'Ermitas del entorno',
      km: 7,
      dificultad: 'Media',
      duracion: '2,5 h',
      tipo: 'Circular',
      imagen: 'images/jerez-de-los-caballeros/Ruta-de-las-Ermitas-Jerez.jpg',
      maps: 'https://www.google.com/maps/search/Ermitas+Jerez+de+los+Caballeros',
      wikiloc:
        'https://www.wikiloc.com/hiking-trails/castillo-de-reina-desde-reina-5080676',
    },
    {
      nombre: 'Ruta de las Dehesas Jerezanas',
      salida: 'Camino rural',
      llegada: 'Dehesas de encinas',
      km: 8,
      dificultad: 'Fácil',
      duracion: '3 h',
      tipo: 'Circular',
      imagen: 'images/jerez-de-los-caballeros/dehesa-jerezanas.jpg',
      maps: 'https://www.google.com/maps/search/Dehesas+Jerez+de+los+Caballeros',
      wikiloc:
        'https://www.wikiloc.com/hiking-trails/castillo-de-reina-desde-reina-5080676',
    },
    {
      nombre: 'Sendero de los Molinos',
      salida: 'Ribera del Ardila',
      llegada: 'Antiguos molinos harineros',
      km: 5,
      dificultad: 'Fácil',
      duracion: '2 h',
      tipo: 'Circular',
      imagen: 'images/jerez-de-los-caballeros/sendero-los-molinos.jpg',
      maps: 'https://www.google.com/maps/search/Molinos+Jerez+de+los+Caballeros',
      wikiloc:
        'https://www.wikiloc.com/hiking-trails/castillo-de-reina-desde-reina-5080676',
    },
    {
      nombre: 'Ruta de los Miradores del Alcázar',
      salida: 'Alcázar',
      llegada: 'Miradores naturales',
      km: 4,
      dificultad: 'Fácil',
      duracion: '1,5 h',
      tipo: 'Circular',
      imagen: 'images/jerez-de-los-caballeros/miradores-alcazar.jpg',
      maps: 'https://www.google.com/maps/search/Miradores+Jerez+de+los+Caballeros',
      wikiloc:
        'https://www.wikiloc.com/hiking-trails/castillo-de-reina-desde-reina-5080676',
    },
    {
      nombre: 'Sendero de la Sierra Suroeste',
      salida: 'Jerez de los Caballeros',
      llegada: 'Entorno serrano',
      km: 10,
      dificultad: 'Media',
      duracion: '3,5 h',
      tipo: 'Lineal',
      imagen: 'images/jerez-de-los-caballeros/sierra-suroeste.jpg',
      maps: 'https://www.google.com/maps/search/Sierra+Suroeste+Jerez+de+los+Caballeros',
      wikiloc:
        'https://www.wikiloc.com/hiking-trails/castillo-de-reina-desde-reina-5080676',
    },
    {
      nombre: 'Ruta del Patrimonio Religioso',
      salida: 'Iglesia de San Bartolomé',
      llegada: 'Templos históricos',
      km: 3,
      dificultad: 'Fácil',
      duracion: '1,5 h',
      tipo: 'Circular',
      imagen: 'images/jerez-de-los-caballeros/patrimonio-religioso.jpg',
      maps: 'https://www.google.com/maps/search/Iglesias+Jerez+de+los+Caballeros',
      wikiloc:
        'https://www.wikiloc.com/hiking-trails/castillo-de-reina-desde-reina-5080676',
    },
    {
      nombre: 'Ruta Nocturna del Casco Histórico',
      salida: 'Plaza de España',
      llegada: 'Murallas iluminadas',
      km: 2,
      dificultad: 'Fácil',
      duracion: '1 h',
      tipo: 'Circular',
      imagen: 'images/jerez-de-los-caballeros/nocturna-jerez.jpg',
      maps: 'https://www.google.com/maps/search/Jerez+de+los+Caballeros+noche',
      wikiloc:
        'https://www.wikiloc.com/hiking-trails/castillo-de-reina-desde-reina-5080676',
    },
  ];
}
