// src/app/interfaces/ruta.ts
export interface Ruta {
  _id?: string;
  nombre: string;
  zona: string;
  // descripcion: string;
  salida?: string;
  llegada?: string;
  km: number; // Cambiado de 'distancia' a 'km' tal como en tu BD
  duracion: string; // Cambiado de 'tiempo' a 'duracion' tal como en tu BD
  dificultad: string;
  tipo?: string;
  imagen: string;
  maps: string; // Cambiado de 'googleMaps' a 'maps' tal como en tu BD
  wikiloc: string;
}
