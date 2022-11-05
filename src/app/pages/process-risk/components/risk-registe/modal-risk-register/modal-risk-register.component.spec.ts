import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRiskRegisterComponent } from './modal-risk-register.component';

describe('ModalRiskRegisterComponent', () => {
  let component: ModalRiskRegisterComponent;
  let fixture: ComponentFixture<ModalRiskRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalRiskRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalRiskRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
