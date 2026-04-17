import { Component, OnInit } from '@angular/core';
import { RutasService } from '../../../services/rutas.service';

@Component({
  selector: 'app-el-jerte',
  imports: [],
  templateUrl: './el-jerte.component.html',
  styleUrl: './el-jerte.component.css',
})
export class ElJerteComponent implements OnInit {
  rutas: any[] = [];
  rutasLocales = [
    {
      nombre: 'Ruta de las Cascadas de las Nogaledas',
      salida: 'Navaconcejo',
      llegada: 'Cascadas de las Nogaledas',
      km: 5,
      dificultad: 'Fácil',
      duracion: '2 h',
      tipo: 'Circular',
      imagen: 'images/jerte/nogaledas.jpg',
      maps: 'https://www.google.com/maps/search/Cascadas+de+las+Nogaledas',
      wikiloc:
        'https://www.wikiloc.com/hiking-trails/castillo-de-reina-desde-reina-5080676',
    },
    {
      nombre: 'Garganta de los Infiernos',
      salida: 'Los Pilones',
      llegada: 'Reserva Natural',
      km: 6,
      dificultad: 'Media',
      duracion: '2,5 h',
      tipo: 'Circular',
      imagen: 'images/jerte/garganta-de-los-infiernos.jpg',
      maps: 'https://www.google.com/maps/search/Garganta+de+los+Infiernos',
      wikiloc:
        'https://www.wikiloc.com/hiking-trails/castillo-de-reina-desde-reina-5080676',
    },
    {
      nombre: 'Ruta del Puerto de Honduras',
      salida: 'Cabezuela del Valle',
      llegada: 'Puerto de Honduras',
      km: 10,
      dificultad: 'Media',
      duracion: '4 h',
      tipo: 'Lineal',
      imagen: 'images/jerte/puerto_de_honduras.jpg',
      maps: 'https://www.google.com/maps/search/Puerto+de+Honduras',
      wikiloc:
        'https://www.wikiloc.com/hiking-trails/castillo-de-reina-desde-reina-5080676',
    },

    {
      nombre: 'Ruta del Cerezo en Flor',
      salida: 'Cabezuela del Valle',
      llegada: 'Miradores del Valle',
      km: 7,
      dificultad: 'Fácil',
      duracion: '2 h',
      tipo: 'Circular',
      imagen: 'images/jerte/cerezo-en-flor.jpg',
      maps: 'https://www.google.com/maps/search/Cabezuela+del+Valle',
      wikiloc:
        'https://www.wikiloc.com/hiking-trails/castillo-de-reina-desde-reina-5080676',
    },
    {
      nombre: 'Sendero del Caozo',
      salida: 'Valdastillas',
      llegada: 'Cascada del Caozo',
      km: 4,
      dificultad: 'Fácil',
      duracion: '1,5 h',
      tipo: 'Ida y vuelta',
      imagen: 'images/jerte/caozo.jpg',
      maps: 'https://www.google.com/maps/search/Cascada+del+Caozo',
      wikiloc:
        'https://www.wikiloc.com/hiking-trails/castillo-de-reina-desde-reina-5080676',
    },
    {
      nombre: 'Ruta del Torno',
      salida: 'El Torno',
      llegada: 'Miradores del Valle',
      km: 8,
      dificultad: 'Media',
      duracion: '3 h',
      tipo: 'Circular',
      imagen: 'images/jerte/ruta-del-torno.jpg',
      maps: 'https://www.google.com/maps/search/El+Torno+Caceres',
      wikiloc:
        'https://www.wikiloc.com/hiking-trails/castillo-de-reina-desde-reina-5080676',
    },
    {
      nombre: 'Sendero del Río Jerte',
      salida: 'Jerte',
      llegada: 'Piscinas Naturales',
      km: 6,
      dificultad: 'Fácil',
      duracion: '2 h',
      tipo: 'Lineal',
      imagen: 'images/jerte/rio-jerte.jpg',
      maps: 'https://www.google.com/maps/search/Rio+Jerte',
      wikiloc:
        'https://www.wikiloc.com/hiking-trails/castillo-de-reina-desde-reina-5080676',
    },
    {
      nombre: 'Ruta de Tornavacas a Candelario',
      salida: 'Tornavacas',
      llegada: 'Límite con Salamanca',
      km: 12,
      dificultad: 'Media',
      duracion: '4 h',
      tipo: 'Lineal',
      imagen: 'images/jerte/tornavacas.jpg',
      maps: 'https://www.google.com/maps/search/Tornavacas',
      wikiloc:
        'https://www.wikiloc.com/hiking-trails/castillo-de-reina-desde-reina-5080676',
    },
    {
      nombre: 'Sendero del Valle Alto',
      salida: 'Piornal',
      llegada: 'Miradores del Jerte',
      km: 10,
      dificultad: 'Media',
      duracion: '3,5 h',
      tipo: 'Circular',
      imagen: 'images/jerte/valle-alto.jpg',
      maps: 'https://www.google.com/maps/search/Piornal+Caceres',
      wikiloc:
        'https://www.wikiloc.com/hiking-trails/castillo-de-reina-desde-reina-5080676',
    },
    {
      nombre: 'Ruta de las Gargantas Menores',
      salida: 'Barrado',
      llegada: 'Gargantas secundarias',
      km: 5,
      dificultad: 'Fácil',
      duracion: '2 h',
      tipo: 'Circular',
      imagen: 'images/jerte/gargantas-menores.jpg',
      maps: 'https://www.google.com/maps/search/Barrado+Caceres',
      wikiloc:
        'https://www.wikiloc.com/hiking-trails/castillo-de-reina-desde-reina-5080676',
    },
  ];
  constructor(private rutasService: RutasService) {}

  ngOnInit() {
    this.rutasService.getRutas().subscribe((res: any) => {
      const rutasBackend = res.filter(
        (ruta: any) => ruta.zona === 'elJerte', // 👈 CLAVE
      );

      // 🔥 UNIMOS TODO
      this.rutas = [...this.rutasLocales, ...rutasBackend];
    });
  }
}
