import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LasVilluercasComponent } from './las-villuercas.component';

describe('LasVilluercasComponent', () => {
  let component: LasVilluercasComponent;
  let fixture: ComponentFixture<LasVilluercasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LasVilluercasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LasVilluercasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
