import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SierraDeGataComponent } from './sierra-de-gata.component';

describe('SierraDeGataComponent', () => {
  let component: SierraDeGataComponent;
  let fixture: ComponentFixture<SierraDeGataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SierraDeGataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SierraDeGataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
