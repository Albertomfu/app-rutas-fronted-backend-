import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlagonComponent } from './alagon.component';

describe('AlagonComponent', () => {
  let component: AlagonComponent;
  let fixture: ComponentFixture<AlagonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlagonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlagonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
