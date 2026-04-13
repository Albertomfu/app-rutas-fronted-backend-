import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampinaSurComponent } from './campina-sur.component';

describe('CampinaSurComponent', () => {
  let component: CampinaSurComponent;
  let fixture: ComponentFixture<CampinaSurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CampinaSurComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampinaSurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
