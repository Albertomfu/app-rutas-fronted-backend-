import { Component } from '@angular/core';

@Component({
  selector: 'app-tentudia',
  imports: [],
  templateUrl: './tentudia.component.html',
  styleUrl: './tentudia.component.css',
})
export class TentudiaComponent {
  rutas = [
    {
      nombre: 'Ruta al Pico Tentudía',
      salida: 'Monasterio de Tentudía',
      llegada: 'Pico Tentudía',
      km: 19.8,
      dificultad: 'Difícil',
      duracion: '6,30 h',
      tipo: 'Circular',
      imagen: 'images/tentudia/picotentudia.jpg',
      maps: 'https://www.google.com/maps/search/Monasterio+de+Tentudía',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/ruta-pico-bonales-y-tentudia-130941924',
    },
    {
      nombre: 'Ruta Calera de León – Monasterio de Tentudía',
      salida: 'Calera de León',
      llegada: 'Monasterio de Tentudía',
      km: 11.96,
      dificultad: 'Media',
      duracion: '4 h',
      tipo: 'Solo Ida',
      imagen: 'images/tentudia/monasterio.jpg',
      maps: 'https://www.google.com/maps/search/Calera+de+León',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/calera-de-leon-al-monasterio-de-tentudia-91163819',
    },
    {
      nombre: 'Ruta Cabeza la Vaca – Tentudía',
      salida: 'Cabeza la Vaca',
      llegada: 'Pico Tentudía',
      km: 14.89,
      dificultad: 'Fácil',
      duracion: '4,30 h',
      tipo: 'Solo Ida',
      imagen: 'images/tentudia/cabeza.jpg',
      maps: 'https://www.google.com/maps/search/Cabeza+la+Vaca+Badajoz',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/cabeza-la-vaca-los-bonales-tentudia-17721845',
    },
    {
      nombre: 'Ruta Sierra de Tentudía Circular',
      salida: 'Monasterio de Tentudía',
      llegada: 'Monasterio de Tentudía',
      km: 10.04,
      dificultad: 'Difícil',
      duracion: '3.5 h',
      tipo: 'Circular',
      imagen: 'images/tentudia/sierraTentudia.jpg',
      maps: 'https://www.google.com/maps/search/Sierra+de+Tentudía',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/circular-sierra-tentudia-19995967',
    },
    {
      nombre: 'Monasterio de Tentudia',
      salida: 'Sierra de Tentudía',
      llegada: 'Sierra de Tentudía',
      km: 18.11,
      dificultad: 'Media',
      duracion: '5,30 h',
      tipo: 'Circular',
      imagen: 'images/tentudia/monasterioTentudia.jpg',
      maps: 'https://www.google.com/maps/search/Fuente+de+Cantos',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/monesterio-monasterio-de-tentudia-monesterio-senderismo-20035460/photo-12532522',
    },
    {
      nombre: 'Ruta Segura de León – Sierra de Tentudía',
      salida: 'Segura de León',
      llegada: 'Sierra de Tentudía',
      km: 14.06,
      dificultad: 'Media',
      duracion: '4.5 h',
      tipo: 'Circular',
      imagen: 'images/tentudia/segura.jpg',
      maps: 'https://www.google.com/maps/search/Segura+de+León',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/segura-de-leon-ruta-circular-sierra-de-la-martela-38152991',
    },
  ];
}
