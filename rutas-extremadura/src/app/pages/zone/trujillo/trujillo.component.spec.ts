import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrujilloComponent } from './trujillo.component';

describe('TrujilloComponent', () => {
  let component: TrujilloComponent;
  let fixture: ComponentFixture<TrujilloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrujilloComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrujilloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
