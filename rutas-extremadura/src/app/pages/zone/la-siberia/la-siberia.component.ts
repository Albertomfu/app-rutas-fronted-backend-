import { Component } from '@angular/core';

@Component({
  selector: 'app-la-siberia',
  imports: [],
  templateUrl: './la-siberia.component.html',
  styleUrl: './la-siberia.component.css',
})
export class LaSiberiaComponent {
  rutas = [
    {
      nombre: 'Ruta del Embalse de García de Sola',
      salida: 'Puerto Peña',
      llegada: 'Riberas del embalse',
      km: 2.3,
      dificultad: 'Fácil',
      duracion: '1 h',
      tipo: 'Lineal',
      imagen: 'images/la-siberia/garcia-sola.jpg',
      maps: 'https://www.google.com/maps/search/Embalse+de+Garcia+de+Sola',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/embalse-garcia-sola-e-playa-de-puerto-pena-com-partida-em-peloche-167599846',
    },
    {
      nombre: 'Sendero de la Tabla del Águila',
      salida: 'Talarrubias',
      llegada: 'Mirador Tabla del Águila',
      km: 4,
      dificultad: 'Fácil',
      duracion: '1 h',
      tipo: 'lineal',
      imagen: 'images/la-siberia/tabla-aguila.jpg',
      maps: 'https://www.google.com/maps/search/Tabla+del+Aguila+Talarrubias',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/senda-la-tablada-cuevas-del-aguila-169326087',
    },
    {
      nombre: 'Ruta del Castillo de Herrera',
      salida: 'Herrera del Duque',
      llegada: 'Castillo de Herrera',
      km: 4,
      dificultad: 'media',
      duracion: '1 h',
      tipo: 'Lineal',
      imagen: 'images/la-siberia/castillo-herrera.jpg',
      maps: 'https://www.google.com/maps/search/Castillo+de+Herrera+del+Duque',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/herrera-del-duque-castillo-de-herrera-172521731',
    },
    {
      nombre: 'Camino de la Noria',
      salida: 'Fuenlabrada de los Montes',
      llegada: 'Riberas del Guadiana',
      km: 8,
      dificultad: 'Fácil',
      duracion: '2 h',
      tipo: 'Lineal',
      imagen: 'images/la-siberia/camino-la-noria.webp',
      maps: 'https://www.google.com/maps/search/Rio+Guadiana+La+Siberia',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/39-camino-de-la-noria-talarrubias-9071761',
    },
    {
      nombre: 'Ruta sendero azul Orellana',
      salida: 'Orellana la Vieja',
      llegada: 'Playa de Orellana',
      km: 19,
      dificultad: 'Media',
      duracion: '4 h',
      tipo: 'Circular',
      imagen: 'images/la-siberia/sendero-orellana.jpg',
      maps: 'https://www.google.com/maps/search/Playa+de+Orellana',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/ruta-sendero-azul-costa-dulce-en-orellana-la-vieja-105364428',
    },
    {
      nombre: 'Ruta de los Batanes',
      salida: 'Helechosa de los Montes',
      llegada: 'Alojamientos cerrillos',
      km: 11,
      dificultad: 'Fácil',
      duracion: '3 h',
      tipo: 'Circular',
      imagen: 'images/la-siberia/2285469Master.jpg',
      maps: 'https://www.google.com/maps/search/Helechosa+de+los+Montes',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/sl-245-los-batanes-helechosa-4555131',
    },
    {
      nombre: 'Ruta del Puerto de los Carneros',
      salida: 'Castilblanco',
      llegada: 'Puerto de montaña',
      km: 14.5,
      dificultad: 'Media',
      duracion: '3,5 h',
      tipo: 'Lineal',
      imagen: 'images/la-siberia/2310659Master.jpg',
      maps: 'https://www.google.com/maps/search/Puerto+de+los+Carneros+Badajoz',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/herrera-a-puerto-de-los-carneros-4596055',
    },
    {
      nombre: 'Sendero de la Dehesa Boyera',
      salida: 'Siruela',
      llegada: 'Dehesas tradicionales',
      km: 7,
      dificultad: 'Fácil',
      duracion: '2 h',
      tipo: 'Circular',
      imagen: 'images/la-siberia/88022576Master.jpg',
      maps: 'https://www.google.com/maps/search/Siruela+Badajoz',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/dehesa-boyal-138710569?utm_source=chatgpt.com',
    },
    {
      nombre: 'Ruta de los Miradores de Puerto Peña',
      salida: 'Puerto Peña',
      llegada: 'Miradores naturales',
      km: 5,
      dificultad: 'Fácil',
      duracion: '1,5 h',
      tipo: 'Circular',
      imagen: 'images/la-siberia/1510054Master.jpg',
      maps: 'https://www.google.com/maps/search/Puerto+Pena+Badajoz',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/ruta-mirador-de-puerto-pena-3420087',
    },

    {
      nombre: 'Paseo Castillo Herrera del Duque',
      salida: 'Plaza de España',
      llegada: 'Casco histórico iluminado',
      km: 7.5,
      dificultad: 'Fácil',
      duracion: '2,3 h',
      tipo: 'Circular',
      imagen: 'images/la-siberia/107718638Master.jpg',
      maps: 'https://www.google.com/maps/search/Herrera+del+Duque+noche',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/paseos-rurales-castillo-de-herrera-del-duque-32305762?utm_source=chatgpt.com',
    },
  ];
}
