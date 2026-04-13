import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaSerenaComponent } from './la-serena.component';

describe('LaSerenaComponent', () => {
  let component: LaSerenaComponent;
  let fixture: ComponentFixture<LaSerenaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaSerenaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaSerenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
