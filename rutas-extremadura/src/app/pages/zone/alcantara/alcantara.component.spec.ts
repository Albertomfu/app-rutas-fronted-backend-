import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlcantaraComponent } from './alcantara.component';

describe('AlcantaraComponent', () => {
  let component: AlcantaraComponent;
  let fixture: ComponentFixture<AlcantaraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlcantaraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlcantaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
