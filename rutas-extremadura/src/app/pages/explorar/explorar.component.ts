import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

type ExploreItem = {
  title: string;
  description: string;
  route: string;
  image: string;
  cta: string;
};

@Component({
  selector: 'app-explorar',
  imports: [RouterLink, CommonModule],
  templateUrl: './explorar.component.html',
  styleUrl: './explorar.component.css',
})
export class ExplorarComponent implements OnInit {
  readonly planPool: ExploreItem[] = [
    {
      title: 'Planes de agua y sombra',
      description:
        'Gargantas y zonas frescas para rutas cómodas en días cálidos.',
      route: '/laVera',
      image: 'images/vera/sendero-del-tietar.jpg',
      cta: 'Explorar La Vera',
    },
    {
      title: 'Paisaje de montaña',
      description: 'Bosques, miradores y senderos para caminar con calma.',
      route: '/sierraDeGata',
      image: 'images/sierra-de-gata/jalama.jpg',
      cta: 'Ver Sierra de Gata',
    },
    {
      title: 'Ruta con patrimonio',
      description:
        'Combina historia, plazas y recorridos con mucho contexto local.',
      route: '/trujillo',
      image: 'images/trujillo/casco-historico.jpg',
      cta: 'Descubrir Trujillo',
    },
    {
      title: 'Escapada para desconectar',
      description: 'Llanuras abiertas y rutas suaves para ir sin prisas.',
      route: '/laSerena',
      image: 'images/la-serena/mirador-de-la-sierra.jpg',
      cta: 'Ir a La Serena',
    },
    {
      title: 'Plan de embalses y naturaleza',
      description: 'Recorridos con agua, avistamiento y parajes tranquilos.',
      route: '/laSiberia',
      image: 'images/la-siberia/sendero-orellana.jpg',
      cta: 'Ver La Siberia',
    },
    {
      title: 'Historia romana y paseo',
      description: 'Un plan cultural con espacios abiertos y rutas urbanas.',
      route: '/merida',
      image: 'images/merida/monumentaldos.jpg',
      cta: 'Descubrir Mérida',
    },
  ];

  // Ampliado a 10 opciones variadas para nutrir la cuadrícula de 8 tarjetas aleatorias
  readonly recommendationPool: ExploreItem[] = [
    {
      title: 'Si tienes medio día',
      description: 'Elige una zona cercana para una ruta corta y sin prisas.',
      route: '/campoAranuelo',
      image: 'images/campo-aranuelo/via-verde-tajo.png',
      cta: 'Ver Campo Arañuelo',
    },
    {
      title: 'Si viajas en familia',
      description: 'Busca rutas sencillas, con sombra y puntos de parada.',
      route: '/ambroz',
      image: 'images/ambroz/sendero-rio-ambroz.jpg',
      cta: 'Ir al Valle del Ambroz',
    },
    {
      title: 'Si quieres paisaje singular',
      description: 'Prueba zonas con miradores y tramos de gran valor natural.',
      route: '/lasVilluercas',
      image: 'images/villuercas/5534625Master.jpg',
      cta: 'Explorar Villuercas',
    },
    {
      title: 'Si quieres historia y agua',
      description:
        'Una combinación muy completa para una escapada de fin de semana.',
      route: '/alcantara',
      image: 'images/alcantara/alcantara-puente.webp',
      cta: 'Visitar Alcántara',
    },
    {
      title: 'Si te gusta la autenticidad',
      description: 'Pueblos serranos y rutas con identidad local marcada.',
      route: '/lasHurdes',
      image: 'images/hurdes/ladrillar.jpg',
      cta: 'Conocer Las Hurdes',
    },
    {
      title: 'Si buscas iniciación',
      description: 'Ruta accesible para empezar a descubrir senderos.',
      route: '/olivenza',
      image: 'images/olivenza/corujas.jpg',
      cta: 'Ver Olivenza',
    },
    {
      title: 'Si buscas avistamiento de aves',
      description:
        'Acantilados, roquedos y la mayor colonia de buitres de la región.',
      route: '/monfrague',
      image: 'images/trujillo/rita-tamatuja.jpg',
      cta: 'Ir a Monfragüe',
    },
    {
      title: 'Si te apasiona el senderismo',
      description: 'Cumbres suaves, castaños centenarios y mucha vegetación.',
      route: '/sierraDeGata',
      image: 'images/gata/trevejo.jpg',
      cta: 'Explorar Gata',
    },
    {
      title: 'Si buscas cerezos y cascadas',
      description:
        'Gargantas espectaculares talladas en la roca y saltos de agua.',
      route: '/valleJerte',
      image: 'images/jerte/infiernos.jpg',
      cta: 'Ver el Valle del Jerte',
    },
    {
      title: 'Si quieres dehesas infinitas',
      description:
        'Caminos entre encinas, lagunas y restos de antiguos castillos.',
      route: '/olivenza',
      image: 'images/olivenza/dehesas.jpg',
      cta: 'Ver Alqueva',
    },
  ];

  randomRecommendations: ExploreItem[] = [];

  ngOnInit(): void {
    // Extraemos 8 elementos únicos al azar cada vez que carga
    this.randomRecommendations = this.getShuffledItems(
      this.recommendationPool,
      8,
    );
  }

  private getShuffledItems(items: ExploreItem[], count: number): ExploreItem[] {
    const shuffled = [...items];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled.slice(0, count);
  }
}
