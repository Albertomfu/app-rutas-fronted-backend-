import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampoAranueloComponent } from './campo-aranuelo.component';

describe('CampoAranueloComponent', () => {
  let component: CampoAranueloComponent;
  let fixture: ComponentFixture<CampoAranueloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CampoAranueloComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampoAranueloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
