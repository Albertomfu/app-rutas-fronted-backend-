import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaVeraComponent } from './la-vera.component';

describe('LaVeraComponent', () => {
  let component: LaVeraComponent;
  let fixture: ComponentFixture<LaVeraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaVeraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaVeraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
