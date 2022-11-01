import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalStateComponent } from './modal-state.component';

describe('ModalStateComponent', () => {
  let component: ModalStateComponent;
  let fixture: ComponentFixture<ModalStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalStateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
