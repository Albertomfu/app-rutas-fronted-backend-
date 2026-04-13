import { TestBed } from '@angular/core/testing';

import { SeleccionMapaService } from './seleccion-mapa.service';

describe('SeleccionMapaService', () => {
  let service: SeleccionMapaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeleccionMapaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
