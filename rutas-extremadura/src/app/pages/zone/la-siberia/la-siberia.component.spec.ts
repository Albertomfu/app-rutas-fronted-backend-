import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaSiberiaComponent } from './la-siberia.component';

describe('LaSiberiaComponent', () => {
  let component: LaSiberiaComponent;
  let fixture: ComponentFixture<LaSiberiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaSiberiaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaSiberiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
