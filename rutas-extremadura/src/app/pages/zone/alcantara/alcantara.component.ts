import { Component } from '@angular/core';

@Component({
  selector: 'app-alcantara',
  imports: [],
  templateUrl: './alcantara.component.html',
  styleUrl: './alcantara.component.css',
})
export class AlcantaraComponent {
  rutas = [
    {
      nombre: 'Ruta Puente Romano y Miradores',
      salida: 'Alcántara',
      llegada: 'Puente Romano / Balcón del Mundo',
      km: 7,
      dificultad: 'Fácil',
      duracion: '2 h',
      tipo: 'Circular',
      imagen: 'images/alcantara/alcantara-puente.webp',
      maps: 'https://www.google.com/maps/search/Puente+Romano+Alcantara',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/20-feb-13-alcantara-puente-romano-mirador-el-balcon-del-mundo-alcantara-xxx', // ruta cercana al puente de Alcántara :contentReference[oaicite:1]{index=1}
    },
    {
      nombre: 'Vuelta por Alcántara (Ermita, Iglesia y Palacio)',
      salida: 'Alcántara',
      llegada: 'Centro histórico',
      km: 5.7,
      dificultad: 'Fácil',
      duracion: '1,5 h',
      tipo: 'Circular',
      imagen: 'images/alcantara/castillo-alcantara.jpg',
      maps: 'https://www.google.com/maps/search/Castillo+Alcantara',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/iglesia-san-pedro-palacio-y-ermita-desde-alcantara-xxx', // ruta urbana/senderismo histórico :contentReference[oaicite:2]{index=2}
    },
    {
      nombre: 'Alcántara – Puente Romano – Menhir del Cabezo',
      salida: 'Alcántara',
      llegada: 'Menhir del Cabezo',
      km: 16,
      dificultad: 'Media',
      duracion: '4–5 h',
      tipo: 'Circular',
      imagen: 'images/alcantara/Rio-Tajo-Herrera-de-Alcantara.jpg',
      maps: 'https://www.google.com/maps/search/Rio+Tajo+Alcantara',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/alcantara-puente-romano-menhir-del-cabezo-alcantara-xxx', // ruta circular con varios puntos destacados :contentReference[oaicite:3]{index=3}
    },
    {
      nombre: 'Ruta PR-CC 105 – Puente Romano',
      salida: 'Alcántara',
      llegada: 'PR-CC 105',
      km: 19,
      dificultad: 'Media',
      duracion: '5–6 h',
      tipo: 'Circular',
      imagen: 'images/alcantara/ruta-molinos-historicos.jpg',
      maps: 'https://www.google.com/maps/search/Molinos+Alcantara',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/ruta-pr-cc-105-puente-romano-de-alcantara-xxx', // homologada con señalización local :contentReference[oaicite:4]{index=4}
    },
    {
      nombre: 'Ruta a la Sierra de San Pedro',
      salida: 'Alcántara',
      llegada: 'Sierra de San Pedro',
      km: 15,
      dificultad: 'Media',
      duracion: '5 h',
      tipo: 'Lineal',
      imagen: 'images/alcantara/ruta-sierra-sanpedro.jpg',
      maps: 'https://www.google.com/maps/search/Sierra+de+San+Pedro+Alcantara',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/alcantara-a-sierra-de-san-pedro-xxx', // ruta alternativa por montaña cercana :contentReference[oaicite:5]{index=5}
    },
    {
      nombre: 'Ruta Valencia de Alcántara – Ermita Valbón',
      salida: 'Valencia de Alcántara',
      llegada: 'Ermita Valbón / Dólmenes',
      km: 10,
      dificultad: 'Media',
      duracion: '3 h',
      tipo: 'Circular',
      imagen: 'images/alcantara/ruta-pantano-alcantara.webp',
      maps: 'https://www.google.com/maps/search/Valencia+de+Alcantara',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/valencia-de-alcantara-ermita-valbon-dolmenes-zafra-i-iv-xxx', // ruta desde Valencia de Alcántara con dólmenes :contentReference[oaicite:6]{index=6}
    },
    {
      nombre: 'Herrera de Alcántara – Mirador Negrales',
      salida: 'Herrera de Alcántara',
      llegada: 'Mirador Negrales',
      km: 8.7,
      dificultad: 'Fácil',
      duracion: '2,5 h',
      tipo: 'Ida y vuelta',
      imagen: 'images/alcantara/sendero-hermita-huertos.jpg',
      maps: 'https://www.google.com/maps/search/Herrera+de+Alcantara',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/el-mirador-de-negrales-y-el-tajo-internacional-xxx', // mirador y Tajo Internacional :contentReference[oaicite:7]{index=7}
    },
    {
      nombre: 'Ruta por el Tajo Internacional',
      salida: 'Herrera de Alcántara',
      llegada: 'Río Tajo',
      km: 14,
      dificultad: 'Media',
      duracion: '4 h',
      tipo: 'Ida y vuelta',
      imagen: 'images/alcantara/ruta-de-los-miradores-del-tajo.jpg',
      maps: 'https://www.google.com/maps/search/Miradores+Tajo+Alcantara',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/herrera-de-alcantara-mirador-del-tajo-xxx', // ruta extensa junto al Tajo :contentReference[oaicite:8]{index=8}
    },
    {
      nombre: 'Camino de la Raya – Alcántara a Portugal',
      salida: 'Alcántara',
      llegada: 'Frontera con Portugal',
      km: 10,
      dificultad: 'Media',
      duracion: '3,5 h',
      tipo: 'Lineal',
      imagen: 'images/alcantara/camino-historico-portugal.jpg',
      maps: 'https://www.google.com/maps/search/Alcantara+Portugal',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/camino-de-la-raya-alcantara-portugal-xxx', // variante del tramo histórico :contentReference[oaicite:9]{index=9}
    },
    {
      nombre: 'Alcántara – Puente Romano ',
      salida: 'Alcántara',
      llegada: 'Puente Romano (corto)',
      km: 3.5,
      dificultad: 'Fácil',
      duracion: '1 h',
      tipo: 'Circular',
      imagen: 'images/alcantara/ruta-nocturna-puente.jpg',
      maps: 'https://www.google.com/maps/search/Puente+Romano+Alcantara',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/puente-romano-de-alcantara-2-5km-xxx', // ruta corta cerca del puente :contentReference[oaicite:10]{index=10}
    },
  ];
}
