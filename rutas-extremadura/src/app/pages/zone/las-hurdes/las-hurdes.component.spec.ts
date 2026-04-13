import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LasHurdesComponent } from './las-hurdes.component';

describe('LasHurdesComponent', () => {
  let component: LasHurdesComponent;
  let fixture: ComponentFixture<LasHurdesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LasHurdesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LasHurdesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
