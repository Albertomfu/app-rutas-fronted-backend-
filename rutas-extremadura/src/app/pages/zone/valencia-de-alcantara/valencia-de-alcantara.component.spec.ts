import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValenciaDeAlcantaraComponent } from './valencia-de-alcantara.component';

describe('ValenciaDeAlcantaraComponent', () => {
  let component: ValenciaDeAlcantaraComponent;
  let fixture: ComponentFixture<ValenciaDeAlcantaraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValenciaDeAlcantaraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValenciaDeAlcantaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
