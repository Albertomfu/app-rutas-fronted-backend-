import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TierraDeBarrosComponent } from './tierra-de-barros.component';

describe('TierraDeBarrosComponent', () => {
  let component: TierraDeBarrosComponent;
  let fixture: ComponentFixture<TierraDeBarrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TierraDeBarrosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TierraDeBarrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
