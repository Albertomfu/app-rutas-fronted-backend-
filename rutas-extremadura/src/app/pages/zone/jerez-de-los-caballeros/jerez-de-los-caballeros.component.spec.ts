import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JerezDeLosCaballerosComponent } from './jerez-de-los-caballeros.component';

describe('JerezDeLosCaballerosComponent', () => {
  let component: JerezDeLosCaballerosComponent;
  let fixture: ComponentFixture<JerezDeLosCaballerosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JerezDeLosCaballerosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JerezDeLosCaballerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
