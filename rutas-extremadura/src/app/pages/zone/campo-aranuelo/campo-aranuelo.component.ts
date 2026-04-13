import { Component } from '@angular/core';

@Component({
  selector: 'app-campo-aranuelo',
  imports: [],
  templateUrl: './campo-aranuelo.component.html',
  styleUrl: './campo-aranuelo.component.css',
})
export class CampoAranueloComponent {
  rutas = [
    {
      nombre: 'Ruta del Castillo de Belvís',
      salida: 'Belvís de Monroy',
      llegada: 'Castillo de Belvís',
      km: 6.5,
      dificultad: 'Fácil',
      duracion: '1,30 h',
      tipo: 'lineal',
      imagen: 'images/campo-aranuelo/Castillo-de-Belvis.jpg',
      maps: 'https://www.google.com/maps/search/Castillo+de+Belvís+de+Monroy',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/belvis-de-monroy-22400173',
    },
    {
      nombre: 'Sendero del Embalse de Rosarito',
      salida: 'candeleda',
      llegada: 'Embalse de Rosarito - candeleda',
      km: 16.3,
      dificultad: 'Media',
      duracion: '4,3 h',
      tipo: 'Ida y vuelta',
      imagen: 'images/campo-aranuelo/Embalse_de_Rosarito.jpg',
      maps: 'https://www.google.com/maps/search/Embalse+de+Rosarito',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/candeleda-embalse-de-rosarito-99719468',
    },
    {
      nombre: 'Ruta del Pantano de Valdecañas',
      salida: 'Valdecañas de Tajo',
      llegada: 'Pantano de Valdecañas',
      km: 49.7,
      dificultad: 'Media',
      duracion: '10 h',
      tipo: 'Circular',
      imagen: 'images/campo-aranuelo/valdecañas.webp',
      maps: 'https://www.google.com/maps/search/Pantano+de+Valdecañas',
      wikiloc:
        'https://es.wikiloc.com/rutas-autocaravana/ruta-por-el-pantano-de-valdecanas-y-alrededores-8668015',
    },
    {
      nombre: 'Sendero de la Dehesa de Oropesa',
      salida: 'Calzada de Oropesa',
      llegada: 'Dehesa de Oropesa',
      km: 17.48,
      dificultad: 'Fácil',
      duracion: '5 h',
      tipo: 'Circular',
      imagen: 'images/campo-aranuelo/dehesa-oropesa.webp',
      maps: 'https://www.google.com/maps/search/Dehesa+Oropesa',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/dehesa-boyal-calzada-de-oropesa-4489495',
    },
    {
      nombre: 'Ruta Dehesa de Talayuela',
      salida: 'Talayuela',
      llegada: 'Molinos tradicionales',
      km: 23.49,
      dificultad: 'Media',
      duracion: '6 h',
      tipo: 'Ida y vuelta',
      imagen: 'images/campo-aranuelo/Río-molinos-tietar.jpg',
      maps: 'https://www.google.com/maps/place/10310+Talayuela,+C%C3%A1ceres/@39.9867764,-5.6149843,2386m/data=!3m2!1e3!4b1!4m6!3m5!1s0xd3fd1b6627c48b9:0xd2ab29fb1a180cfa!8m2!3d39.9879982!4d-5.6103146!16s%2Fm%2F02z7kwj?entry=ttu&g_ep=EgoyMDI2MDExMy4wIKXMDSoKLDEwMDc5MjA3MUgBUAM%3D',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/talayuela-dehesa-rio-tietar-pinar-42192391',
    },
    {
      nombre: 'Camino Histórico de Almaraz',
      salida: 'Almaraz',
      llegada: 'Iglesia y entorno histórico',
      km: 11.38,
      dificultad: 'Fácil',
      duracion: '3 h',
      tipo: 'Circular',
      imagen: 'images/campo-aranuelo/camino-almaraz.jpg',
      maps: 'https://www.google.com/maps/search/Almaraz+Extremadura',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/almaraz-valdeobispo-147610774',
    },
    {
      nombre: 'Ruta de la Vía Verde del Tajo',
      salida: 'Almaraz',
      llegada: 'Puente de Albalat',
      km: 13.81,
      dificultad: 'Media',
      duracion: '3 h',
      tipo: 'circular',
      imagen: 'images/campo-aranuelo/via-verde-tajo.jpeg',
      maps: 'https://www.google.com/maps/search/Via+Verde+del+Tajo',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/almaraz-puente-del-tajo-almaraz-127354888',
    },
    {
      nombre: 'Sendero de las Gargantas de Jaranda',
      salida: 'Guijo de Santa Bárbara',
      llegada: 'Gargantas naturales',
      km: 7,
      dificultad: 'Media',
      duracion: '2,5 h',
      tipo: 'Circular',
      imagen: 'images/campo-aranuelo/garganta-de-jaranda.jpg',
      maps: 'https://www.google.com/maps/search/Gargantas+de+Jaranda',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/trabuquete-garganta-de-jaranda-puente-de-los-tocinos-puente-cicuta-guijo-de-santa-barbara-caceresp-150054264',
    },
    {
      nombre: 'Ruta de Chorrera Matagarcía',
      salida: 'Tejeda de Tiétar',
      llegada: 'Miradores panorámicos',
      km: 13.37,
      dificultad: 'Fácil',
      duracion: '3.5 h',
      tipo: 'Circular',
      imagen: 'images/campo-aranuelo/miradores-del-campo-arañuelo.jpg',
      maps: 'https://www.google.com/maps/search/Miradores+Campo+Arañuelo',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/tejeda-de-tietar-chorrera-matagarcia-pontenes-67862246',
    },
    {
      nombre: 'Navalmoral a Peraleda de la Mata',
      salida: 'Navalmoral de la Mata',
      llegada: 'Peraleda de la Mata',
      km: 14,
      dificultad: 'Fácil',
      duracion: '4 h aprox',
      tipo: 'Lineal',
      imagen: 'images/campo-aranuelo/navalmoral-mata.jpg',
      maps: 'https://www.google.com/maps/search/Navalmoral+de+la+Mata+Extremadura',
      wikiloc:
        'https://www.wikiloc.com/rutas-senderismo/peraleda-de-la-mata-navalmoral-de-la-mata-6134105',
    },
  ];
}
