import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalProbabilityComponent } from './modal-probability.component';

describe('ModalProbabilityComponent', () => {
  let component: ModalProbabilityComponent;
  let fixture: ComponentFixture<ModalProbabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalProbabilityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalProbabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
