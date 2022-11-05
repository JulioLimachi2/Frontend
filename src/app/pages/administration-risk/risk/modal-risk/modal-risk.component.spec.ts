import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRiskComponent } from './modal-risk.component';

describe('ModalRiskComponent', () => {
  let component: ModalRiskComponent;
  let fixture: ComponentFixture<ModalRiskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalRiskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalRiskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
