import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonBenitoComponent } from './don-benito.component';

describe('DonBenitoComponent', () => {
  let component: DonBenitoComponent;
  let fixture: ComponentFixture<DonBenitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DonBenitoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonBenitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
