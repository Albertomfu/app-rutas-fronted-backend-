import { Component } from '@angular/core';

@Component({
  selector: 'app-ambroz',
  imports: [],
  templateUrl: './ambroz.component.html',
  styleUrl: './ambroz.component.css',
})
export class AmbrozComponent {
  rutas = [
    {
      nombre: 'Camino de Arrieros (Hervás – Baños)',
      salida: 'Hervás',
      llegada: 'Baños de Montemayor',
      km: 8,
      dificultad: 'Fácil',
      duracion: '2 h',
      tipo: 'Ida y vuelta',
      imagen: 'images/ambroz/castañar-gallego.jpg',
      maps: 'https://www.google.com/maps/search/Herv%C3%A1s+Ba%C3%B1os+de+Montemayor',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/camino-de-arrieros-sl-cc-92-hervas-banos-de-montemayor-4281m-129209424', // sendero clásico del Ambroz :contentReference[oaicite:1]{index=1}
    },
    {
      nombre: 'Ruta del Pantano de Baños (PR-CC 40)',
      salida: 'Baños de Montemayor',
      llegada: 'Embalse de Baños',
      km: 12.2,
      dificultad: 'Fácil/Media',
      duracion: '2,5–3 h',
      tipo: 'Circular',
      imagen: 'images/ambroz/Ruta-de-los-Sentidos.jpg',
      maps: 'https://www.google.com/maps/search/Embalse+de+Ba%C3%B1os+de+Montemayor',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/ruta-pantano-de-banos-pr-cc-40-124056342', // ruta con vistas al embalse y praderas :contentReference[oaicite:2]{index=2}
    },
    {
      nombre: 'Valle del Ambroz Integral (Hervás – La Garganta)',
      salida: 'Hervás',
      llegada: 'La Garganta',
      km: 26,
      dificultad: 'Media',
      duracion: '6 h',
      tipo: 'Lineal',
      imagen: 'images/ambroz/sendero-rio-ambroz.jpg',
      maps: 'https://www.google.com/maps/search/Valle+del+Ambroz',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/recorrido-por-el-valle-de-ambroz-hervas-banos-puerto-de-bejar-la-garganta-hervas-20939679', // ruta integral del valle :contentReference[oaicite:3]{index=3}
    },
    {
      nombre: 'Hervás – Bosques del Ambroz (PR-CC 37)',
      salida: 'La Garganta',
      llegada: 'Segura de Toro',
      km: 20,
      dificultad: 'Media',
      duracion: '6 h',
      tipo: 'Travessia',
      imagen: 'images/ambroz/ruta-de-los-dolmenes.jpg',
      maps: 'https://www.google.com/maps/search/Segura+de+Toro',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/valle-del-ambroz-pr-cc-37-desde-la-garganta-hasta-segura-de-toro-32584765', // ruta por bosques y valles :contentReference[oaicite:4]{index=4}
    },
    {
      nombre: 'Hervás – Baños por Ermita y La Garganta',
      salida: 'Hervás',
      llegada: 'Baños de Montemayor',
      km: 14,
      dificultad: 'Media',
      duracion: '5–6 h',
      tipo: 'Lineal',
      imagen: 'images/ambroz/via_de_la_plata.jpg',
      maps: 'https://www.google.com/maps/search/V%C3%ADa+de+la+Plata+Herv%C3%A1s',
      wikiloc:
        'https://www.wikiloc.com/hiking-trails/hervas-banos-de-montemayor-por-ermita-de-san-gregorio-la-garganta-y-los-bosques-de-ambroz-valle-de-12836175', // ruta larga por caminos históricos :contentReference[oaicite:5]{index=5}
    },
    {
      nombre: 'Vía Verde de la Plata (Hervás)',
      salida: 'Hervás',
      llegada: 'Zona de Vía Verde',
      km: 9,
      dificultad: 'Fácil',
      duracion: '3 h',
      tipo: 'Ida y vuelta',
      imagen: 'images/ambroz/miradores-ambroz.jpg',
      maps: 'https://www.google.com/maps/search/Via+Verde+Herv%C3%A1s',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/valle-del-ambroz-banos-de-montemayor-hervas-162471664', // recorrido clásico en vía verde :contentReference[oaicite:6]{index=6}
    },
    {
      nombre: 'Rutas periurbanas de Hervás (corta)',
      salida: 'Hervás',
      llegada: 'Entorno Hervás',
      km: 3,
      dificultad: 'Fácil',
      duracion: '1 h',
      tipo: 'Circular',
      imagen: 'images/ambroz/sendero-robledal.jpg',
      maps: 'https://www.google.com/maps/search/Herv%C3%A1s+Centro',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/rutas-periurbanas-hervas-3km-xxx', // paseo urbano por miradores y entorno (puedes buscar la ruta específica) :contentReference[oaicite:7]{index=7}
    },
    {
      nombre: 'Ruta de los Castañares (Hervás)',
      salida: 'Hervás',
      llegada: 'Castañares y ribera',
      km: 16,
      dificultad: 'Media',
      duracion: '5 h',
      tipo: 'Circular',
      imagen: 'images/ambroz/sendero-tejea.jpg',
      maps: 'https://www.google.com/maps/search/Casta%C3%B1ares+Herv%C3%A1s',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/valle-del-ambroz-caceres-8079832', // ruta circular popular del Ambroz :contentReference[oaicite:8]{index=8}
    },
    {
      nombre: 'Ruta Nocturna por Hervás (urbana)',
      salida: 'Barrio Judío de Hervás',
      llegada: 'Casco histórico',
      km: 3,
      dificultad: 'Fácil',
      duracion: '1 h',
      tipo: 'Circular',
      imagen: 'images/ambroz/nocturna-hervas.jpg',
      maps: 'https://www.google.com/maps/search/Barrio+Judio+de+Hervas',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/rutas-periurbanas-hervas-3km-xxx', // puedes usar paseo periurbano vinculado a Hervás :contentReference[oaicite:9]{index=9}
    },
  ];
}
