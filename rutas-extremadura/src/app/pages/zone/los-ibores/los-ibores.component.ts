import { Component } from '@angular/core';

@Component({
  selector: 'app-los-ibores',
  imports: [],
  templateUrl: './los-ibores.component.html',
  styleUrl: './los-ibores.component.css',
})
export class LosIboresComponent {
  rutas = [
    {
      nombre: 'Ruta Ibores',
      salida: 'Castañar de Ibor',
      llegada: 'Mesas / Castañar',
      km: 11.5,
      dificultad: 'Media',
      duracion: '3 h',
      tipo: 'Lineal',
      imagen: 'images/ibores/ibores.jpg',
      maps: 'https://www.google.com/maps/search/Castañar+de+Ibor+Caceres',
      wikiloc: 'https://es.wikiloc.com/rutas-senderismo/ibores-118533291',
    },
    {
      nombre: 'Ruta por Bohonal de Ibor',
      salida: 'Bohonal de Ibor',
      llegada: 'Valle / Fresnedoso',
      km: 14.52,
      dificultad: 'Fácil',
      duracion: '4 h',
      tipo: 'Ida y vuelta',
      imagen: 'images/ibores/bohonal.jpg',
      maps: 'https://www.google.com/maps/search/Bohonal+de+Ibor+Caceres',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/bohonal-de-ibor-al-dolmen-del-pibor-circular-92118202',
    },
    {
      nombre: 'Ruta Navalvillar de Ibor – Sierra Viejas',
      salida: 'Navalvillar de Ibor',
      llegada: 'Sierra Viejas',
      km: 19.93,
      dificultad: 'Difícil',
      duracion: '7-8 h',
      tipo: 'Ida y vuelta',
      imagen: 'images/ibores/navalvillar.jpg',
      maps: 'https://www.google.com/maps/search/Navalvillar+de+Ibor+Caceres',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/navalvillar-de-ibor-rodeo-a-la-sierra-de-viejas-29548791',
    },
    {
      nombre: 'Travesía Valle del Río Viejas – Guadalupe',
      salida: 'Navalvillar de Ibor',
      llegada: 'Guadalupe (travesía)',
      km: 24,
      dificultad: 'Media',
      duracion: '8 h',
      tipo: 'Lineal',
      imagen: 'images/ibores/rioViejas.jpg',
      maps: 'https://www.google.com/maps/search/Navalvillar+de+Ibor+Guadalupe',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/navalvillar-de-ibor-valle-del-rio-viejas-guadalupe-151081705',
    },
    {
      nombre: 'Castañar de Ibor',
      salida: 'Castañar de Ibor',
      llegada: 'Castañar de Ibor',
      km: 17,
      dificultad: 'Moderada',
      duracion: '5.3 h',
      tipo: 'Circular',
      imagen: 'images/ibores/castañar.jpg',
      maps: 'https://www.google.com/maps/place/10340+Casta%C3%B1ar+de+Ibor,+C%C3%A1ceres/@39.8883942,-6.1607402,135532m/data=!3m1!1e3!4m6!3m5!1s0xd15699585902f7d:0x3e0a311e2c8cb033!8m2!3d39.6282197!4d-5.4181736!16s%2Fm%2F02z7jn1?entry=ttu&g_ep=EgoyMDI2MDIwNC4wIKXMDSoKLDEwMDc5MjA3MUgBUAM%3D',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/castanar-de-ibor-castanos-y-chorreras-de-calabazas-geoparque-villuercas-ibores-jara-video-36895725',
    },
  ];
}
