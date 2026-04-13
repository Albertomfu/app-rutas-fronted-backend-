import { Component } from '@angular/core';

@Component({
  selector: 'app-la-serena',
  imports: [],
  templateUrl: './la-serena.component.html',
  styleUrl: './la-serena.component.css',
})
export class LaSerenaComponent {
  rutas = [
    {
      nombre: 'Ruta de los Tartesos',
      salida: 'Zalamea de la Serena',
      llegada: 'Circuito alrededor de la localidad',
      km: 25,
      dificultad: 'Media',
      duracion: '5 h',
      tipo: 'Circular',
      imagen: 'images/la-serena/ruta-de-los-tartesos.jpg',
      maps: 'https://www.google.com/maps/search/Zalamea+de+la+Serena',
      wikiloc:
        'https://es.wikiloc.com/rutas-a-pie/x-ruta-de-los-tartessos-187409783',
    },
    {
      nombre: 'Ruta a Dólmenes Sierras Gordas',
      salida: 'Valle de la Serena',
      llegada: 'Dolmen Sierra Gorda',
      km: 13,
      dificultad: 'Media',
      duracion: '3 h',
      tipo: 'circular',
      imagen: 'images/la-serena/ruta-dolmenes.jpg',
      maps: 'https://www.google.com/maps/search/Dolmen+Sierra+Gorda+Valle+de+la+Serena',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/valle-de-la-serena-las-leyendas-dolmen-de-sierra-gorda-95797273',
    },
    {
      nombre: 'Ruta circular Mirador de la Sierra',
      salida: 'Valle de la Serena',
      llegada: 'Mirador de la Sierra',
      km: 9,
      dificultad: 'Fácil',
      duracion: '2,5 h',
      tipo: 'Circular',
      imagen: 'images/la-serena/mirador-de-la-sierra.jpg',
      maps: 'https://www.google.com/maps/search/Mirador+de+la+Sierra+Valle+de+la+Serena',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/ruta-circular-valle-de-la-serena-mirador-de-la-sierra-80751371',
    },
    {
      nombre: 'Ruta de los Labradores',
      salida: 'Higuera de la Serena',
      llegada: 'Dehesa boyal',
      km: 19.5,
      dificultad: 'Media',
      duracion: '3,5 h',
      tipo: 'circular',
      imagen: 'images/la-serena/labradores.jpg',
      maps: 'https://www.google.com/maps/search/Higuera+de+la+Serena',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/ruta-de-los-labradores-176843224',
    },
    {
      nombre: 'Camino de las Dehesas',
      salida: 'Higuera de la Serena',
      llegada: 'Pago San Isidro',
      km: 9,
      dificultad: 'Fácil',
      duracion: '2,5 h',
      tipo: 'Circular',
      imagen: 'images/la-serena/camino-dehesa.jpg',
      maps: 'https://www.google.com/maps/search/Pago+San+Isidro+Higuera+de+la+Serena',
      wikiloc:
        'https://ca.wikiloc.com/rutes-senderisme/camino-de-las-dehesas-sl-ba-77-88128',
    },
    {
      nombre: 'Cañada Leonesa de Hijovejo',
      salida: 'Quintana de la Serena',
      llegada: 'Sendero SL-BA 74',
      km: 6,
      dificultad: 'Fácil',
      duracion: '2 h',
      tipo: 'lineal',
      imagen: 'images/la-serena/yacimiento-hijovejo2.jpg',
      maps: 'https://www.google.com/maps/search/Quintana+de+la+Serena',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/canada-leonesa-de-hijovejo-sl-ba-74-70093',
    },
    {
      nombre: 'Cancho Roano desde Quintana',
      salida: 'Quintana de la Serena',
      llegada: 'Yacimiento de Cancho Roano',
      km: 12,
      dificultad: 'Media',
      duracion: '3,30 h',
      tipo: 'Circular',
      imagen: 'images/la-serena/cacho-raono.jpg',
      maps: 'https://www.google.com/maps/search/Cancho+Roano',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/cancho-roano-desde-quintana-de-la-serena-2024-164900332',
    },
  ];
}
