import { Component } from '@angular/core';

@Component({
  selector: 'app-merida',
  imports: [],
  templateUrl: './merida.component.html',
  styleUrl: './merida.component.css',
})
export class MeridaComponent {
  rutas = [
    {
      nombre: 'Mérida Monumental',
      salida: 'Mérida (centro histórico)',
      llegada: 'Mérida (centro histórico)',
      km: 13.99,
      dificultad: 'Fácil',
      duracion: '4 h',
      tipo: 'Circular / Solo ida cultural',
      imagen: 'images/merida/monumental.jpg',
      maps: 'https://www.google.com/maps/place/Mérida,+Badajoz,+España',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/merida-monumental-33865553',
    },
    {
      nombre: 'Mérida – Acueducto de los Milagros – Albarregas',
      salida: 'Mérida (Acueducto de los Milagros)',
      llegada: 'Río Albarregas',
      km: 14.78,
      dificultad: 'Fácil',
      duracion: '4 h',
      tipo: 'Solo ida',
      imagen: 'images/merida/milagros.jpg',
      maps: 'https://www.google.com/maps/search/Acueducto+de+los+Milagros+Mérida',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/badajoz-merida-acueducto-de-los-milagros-acueducto-de-san-lazaro-la-aguina-canada-de-araya-via-de-l-69439084',
    },
    {
      nombre: 'Mérida – Presa de Cornalvo',
      salida: 'Mérida',
      llegada: 'Presa de Cornalvo',
      km: 9.37,
      dificultad: 'Media',
      duracion: '2,3 h',
      tipo: 'Ida y vuelta',
      imagen: 'images/merida/cornalvo.jpg',
      maps: 'https://www.google.com/maps/search/Embalse+de+Cornalvo',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/merida-embalse-de-cornalvo-por-el-pr-ba-007-26543736',
    },
    {
      nombre: 'La Pradera de Navalhorno',
      salida: 'Centro de Interpretación Cornalvo',
      llegada: 'Centro de Interpretación Cornalvo',
      km: 14.23,
      dificultad: 'Media',
      duracion: '3 h',
      tipo: 'Circular',
      imagen: 'images/merida/navalhorno.jpg',
      maps: 'https://www.google.com/maps/search/Parque+Natural+de+Cornalvo',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/la-pradera-de-navalhorno-118308904',
    },

    {
      nombre: 'Badajoz – Mérida – Proserpina (Ruta del Agua)',
      salida: 'Mérida (Puente de Lusitania)',
      llegada: 'Embalse de Proserpina y vuelta',
      km: 17.6,
      dificultad: 'Fácil',
      duracion: '5 h',
      tipo: 'Circular',
      imagen: 'images/merida/poserpina.jpg',
      maps: 'https://www.google.com/maps/search/Embalse+de+Proserpina+Mérida',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/rutas-a-pie-merida-proserpina-por-pr-ba-250-ruta-del-agua-2827993',
    },
    {
      nombre: 'XIII Ruta Monumental Senderista Octavio Augusto',
      salida: 'Mérida (zona céntrica)',
      llegada: 'Mérida (zona céntrica)',
      km: 12.56,
      dificultad: 'Fácil',
      duracion: '4.5 h',
      tipo: 'Circular cultural',
      imagen: 'images/merida/octavio.jpg',
      maps: 'https://www.google.com/maps/search/Mérida+ciudad+histórica',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/xiii-ruta-monumental-senderista-octavio-augusto-94100879',
    },
    {
      nombre: 'Mérida Monumental – Parte I',
      salida: 'Mérida (centro histórico)',
      llegada: 'Mérida (centro histórico)',
      km: 4.92,
      dificultad: 'Fácil',
      duracion: '1 h',
      tipo: 'Circular paseo',
      imagen: 'images/merida/monumentaldos.jpg',
      maps: 'https://www.google.com/maps/search/Mérida+ciudad+histórica',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/merida-monumental-i-parte-74122656',
    },
    {
      nombre: 'Mérida – Embalse de Proserpina – Iglesia San Andrés',
      salida: 'Mérida',
      llegada: 'Iglesia de San Andrés',
      km: 17.1,
      dificultad: 'Moderada',
      duracion: '6 h',
      tipo: 'Ida y vuelta',
      imagen: 'images/merida/iglesia.jpg',
      maps: 'https://www.google.com/maps/search/Embalse+de+Proserpina+Mérida',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/merida-embalse-de-proserpina-iglesia-nuestra-senora-de-la-consolacion-iglesia-de-san-andres-162479357',
    },
  ];
}
