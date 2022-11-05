import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRiskTreatmentComponent } from './modal-risk-treatment.component';

describe('ModalRiskTreatmentComponent', () => {
  let component: ModalRiskTreatmentComponent;
  let fixture: ComponentFixture<ModalRiskTreatmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalRiskTreatmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalRiskTreatmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
