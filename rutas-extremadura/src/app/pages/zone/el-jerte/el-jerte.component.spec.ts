import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElJerteComponent } from './el-jerte.component';

describe('ElJerteComponent', () => {
  let component: ElJerteComponent;
  let fixture: ComponentFixture<ElJerteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElJerteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElJerteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
