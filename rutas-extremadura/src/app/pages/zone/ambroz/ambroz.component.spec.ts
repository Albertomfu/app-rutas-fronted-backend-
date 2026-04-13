import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbrozComponent } from './ambroz.component';

describe('AmbrozComponent', () => {
  let component: AmbrozComponent;
  let fixture: ComponentFixture<AmbrozComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AmbrozComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmbrozComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
