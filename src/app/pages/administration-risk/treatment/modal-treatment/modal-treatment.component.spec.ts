import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalTreatmentComponent } from './modal-treatment.component';

describe('ModalTreatmentComponent', () => {
  let component: ModalTreatmentComponent;
  let fixture: ComponentFixture<ModalTreatmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalTreatmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalTreatmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
