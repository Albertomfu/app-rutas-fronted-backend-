import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LosIboresComponent } from './los-ibores.component';

describe('LosIboresComponent', () => {
  let component: LosIboresComponent;
  let fixture: ComponentFixture<LosIboresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LosIboresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LosIboresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
