import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtremaduraMapComponent } from './extremadura-map.component';

describe('ExtremaduraMapComponent', () => {
  let component: ExtremaduraMapComponent;
  let fixture: ComponentFixture<ExtremaduraMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExtremaduraMapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtremaduraMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
