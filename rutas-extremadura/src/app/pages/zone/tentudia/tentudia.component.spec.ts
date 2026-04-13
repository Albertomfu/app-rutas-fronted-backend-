import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TentudiaComponent } from './tentudia.component';

describe('TentudiaComponent', () => {
  let component: TentudiaComponent;
  let fixture: ComponentFixture<TentudiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TentudiaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TentudiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
