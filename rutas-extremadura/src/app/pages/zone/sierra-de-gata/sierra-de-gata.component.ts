import { Component } from '@angular/core';

@Component({
  selector: 'app-sierra-de-gata',
  imports: [],
  templateUrl: './sierra-de-gata.component.html',
  styleUrl: './sierra-de-gata.component.css',
})
export class SierraDeGataComponent {
  rutas = [
    {
      nombre: 'Chorrituelo de Ovejuela',
      salida: 'Ovejuela',
      llegada: 'Chorro de los Ángeles',
      km: 16.38,
      dificultad: 'Media',
      duracion: '5 h',
      tipo: 'Circular',
      imagen: 'images/sierra-de-gata/chorro.jpg',
      maps: 'https://www.google.com/maps/search/Ovejuela+Cáceres',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/chorro-de-los-angeles-chorrituelo-de-ovejuela-65701679',
    },
    {
      nombre: 'Ruta Trevejo – Castillo de Trevejo',
      salida: 'Trevejo',
      llegada: 'Castillo de Trevejo',
      km: 1.87,
      dificultad: 'Fácil',
      duracion: '1.5 h',
      tipo: 'Circular',
      imagen: 'images/sierra-de-gata/trevejo.jpg',
      maps: 'https://www.google.com/maps/search/Trevejo+Cáceres',
      wikiloc: 'https://es.wikiloc.com/rutas-senderismo/trevejo-castillo',
    },
    {
      nombre: 'Ruta Acebo – Jálama',
      salida: 'Acebo',
      llegada: 'Pico Jálama',
      km: 25.36,
      dificultad: 'Media',
      duracion: '6 h',
      tipo: 'Circular',
      imagen: 'images/sierra-de-gata/jalama.jpg',
      maps: 'https://www.google.com/maps/search/Pico+Jalama',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/acebo-jalama-acebo-1633776',
    },
    {
      nombre: 'Ruta Robledillo de Gata',
      salida: 'Robledillo de Gata',
      llegada: 'Robledillo de Gata',
      km: 10.96,
      dificultad: 'Media',
      duracion: '4 h',
      tipo: 'Circular',
      imagen: 'images/sierra-de-gata/robledillo.jpg',
      maps: 'https://www.google.com/maps/search/Robledillo+de+Gata',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/robledillo-de-gata-puerto-de-la-cruz-y-iglesia-de-nuestra-senora-de-la-asuncion-desde-ermita-del-hu-171159349',
    },
    {
      nombre: 'Ruta San Martín de Trevejo – Eljas',
      salida: 'San Martín de Trevejo',
      llegada: 'Eljas',
      km: 12.36,
      dificultad: 'Fácil',
      duracion: '4 h',
      tipo: 'Solo Ida ',
      imagen: 'images/sierra-de-gata/eljas.jpg',
      maps: 'https://www.google.com/maps/search/San+Martin+de+Trevejo',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/san-martin-de-trevejo-a-eljas-5374389',
    },
    {
      nombre: 'Sierra de Gata – Ruta Hoyos ',
      salida: 'Gata',
      llegada: 'Hoyos',
      km: 24.47,
      dificultad: 'Media',
      duracion: '7 h',
      tipo: 'Solo Ida',
      imagen: 'images/sierra-de-gata/hoyos.jpg',
      maps: 'https://www.google.com/maps/search/Hoyos+Cáceres',
      wikiloc: 'https://es.wikiloc.com/rutas-senderismo/gata-hoyos-13065546',
    },
    {
      nombre: 'Ruta Torre de Don Miguel – Ermita del Cristo',
      salida: 'Torre de Don Miguel',
      llegada: 'Ermita del Cristo',
      km: 8.4,
      dificultad: 'Fácil',
      duracion: '3 h',
      tipo: 'Solo Ida',
      imagen: 'images/sierra-de-gata/donMiguel.jpg',
      maps: 'https://www.google.com/maps/search/Torre+de+Don+Miguel',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/ermita-del-cristo-y-iglesia-de-la-asuncion-desde-torre-de-don-miguel-169931963',
    },
  ];
}
