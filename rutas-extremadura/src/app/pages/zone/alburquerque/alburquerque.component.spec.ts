import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlburquerqueComponent } from './alburquerque.component';

describe('AlburquerqueComponent', () => {
  let component: AlburquerqueComponent;
  let fixture: ComponentFixture<AlburquerqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlburquerqueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlburquerqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
