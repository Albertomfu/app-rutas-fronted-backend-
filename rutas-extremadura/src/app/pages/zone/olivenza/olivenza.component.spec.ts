import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OlivenzaComponent } from './olivenza.component';

describe('OlivenzaComponent', () => {
  let component: OlivenzaComponent;
  let fixture: ComponentFixture<OlivenzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OlivenzaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OlivenzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
