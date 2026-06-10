// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// @Injectable({
//   providedIn: 'root',
// })
// export class RutasService {
//   private apiUrl = 'http://localhost:5000/rutas';

//   constructor(private http: HttpClient) {}

//   getRutas() {
//     return this.http.get(this.apiUrl);
//   }

//   addRuta(ruta: any) {
//     return this.http.post(this.apiUrl, ruta);
//   }

//   deleteRuta(id: string) {
//     return this.http.delete(`${this.apiUrl}/${id}`);
//   }
// }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; // 👈 Importante añadir esto
import { Ruta } from '../interface/ruta'; // Asegúrate de que los '../' apunten bien a tu carpeta de interfaces
import {
  RUTAS_LOCALES_ALAGON,
  RUTAS_LOCALES_ALBURQUERQUE,
  RUTAS_LOCALES_ALCANTARA,
  RUTAS_LOCALES_AMBROZ,
  RUTAS_LOCALES_BADAJOZ,
  RUTAS_LOCALES_CACERES,
  RUTAS_LOCALES_CAMPINASUR,
  RUTAS_LOCALES_CAMPOARANUELO,
  RUTAS_LOCALES_DONBENITO,
  RUTAS_LOCALES_ELJERTE,
  RUTAS_LOCALES_JEREZDELOSCABALLEROS,
  RUTAS_LOCALES_LASERENA,
  RUTAS_LOCALES_LASHURDES,
  RUTAS_LOCALES_LASIBERIA,
  RUTAS_LOCALES_LASVILLUERCAS,
  RUTAS_LOCALES_LAVERA,
  RUTAS_LOCALES_LOSIBORES,
  RUTAS_LOCALES_MERIDA,
  RUTAS_LOCALES_OLIVENZA,
  RUTAS_LOCALES_SIERRADEGATA,
  RUTAS_LOCALES_TENTUDIA,
  RUTAS_LOCALES_TIERRADEBARROS,
  RUTAS_LOCALES_TRUJILLO,
  RUTAS_LOCALES_VALENCIADEALCANTARA,
} from '../interface/rutas-locales'; // 👈 Importamos tus rutas fijas

@Injectable({
  providedIn: 'root',
})
export class RutasService {
  private apiUrl = 'http://localhost:5000/api/rutas';

  constructor(private http: HttpClient) {}

  getRutas(): Observable<Ruta[]> {
    return this.http.get<Ruta[]>(this.apiUrl).pipe(
      map((rutasBackend) => {
        // Combinamos las rutas que vienen de MongoDB con las que tienes escritas a mano
        return [
          ...RUTAS_LOCALES_ALAGON,
          ...RUTAS_LOCALES_ALBURQUERQUE,
          ...RUTAS_LOCALES_ALCANTARA,
          ...RUTAS_LOCALES_AMBROZ,
          ...RUTAS_LOCALES_BADAJOZ,
          ...RUTAS_LOCALES_CACERES,
          ...RUTAS_LOCALES_CAMPINASUR,
          ...RUTAS_LOCALES_CAMPOARANUELO,
          ...RUTAS_LOCALES_DONBENITO,
          ...RUTAS_LOCALES_ELJERTE,
          ...RUTAS_LOCALES_JEREZDELOSCABALLEROS,
          ...RUTAS_LOCALES_LASERENA,
          ...RUTAS_LOCALES_LASIBERIA,
          ...RUTAS_LOCALES_LAVERA,
          ...RUTAS_LOCALES_LASHURDES,
          ...RUTAS_LOCALES_LASVILLUERCAS,
          ...RUTAS_LOCALES_LOSIBORES,
          ...RUTAS_LOCALES_MERIDA,
          ...RUTAS_LOCALES_OLIVENZA,
          ...RUTAS_LOCALES_SIERRADEGATA,
          ...RUTAS_LOCALES_TENTUDIA,
          ...RUTAS_LOCALES_TIERRADEBARROS,
          ...RUTAS_LOCALES_TRUJILLO,
          ...RUTAS_LOCALES_VALENCIADEALCANTARA,
          ...rutasBackend,
        ];
      }),
    );
  }

  addRuta(ruta: Ruta): Observable<Ruta> {
    return this.http.post<Ruta>(this.apiUrl, ruta);
  }

  deleteRuta(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
