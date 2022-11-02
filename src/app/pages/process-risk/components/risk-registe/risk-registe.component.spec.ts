import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskRegisteComponent } from './risk-registe.component';

describe('RiskRegisteComponent', () => {
  let component: RiskRegisteComponent;
  let fixture: ComponentFixture<RiskRegisteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiskRegisteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RiskRegisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
