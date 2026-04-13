import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RutasService {
  api = 'http://localhost:5000/api/rutas';

  constructor(private http: HttpClient) {}

  getRutas() {
    return this.http.get(this.api);
  }

  addRuta(ruta: any) {
    return this.http.post(this.api, ruta);
  }

  updateRuta(id: string, ruta: any) {
    return this.http.put(`${this.api}/${id}`, ruta);
  }

  deleteRuta(id: string) {
    return this.http.delete(`${this.api}/${id}`);
  }
}
