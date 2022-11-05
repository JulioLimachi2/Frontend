import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEffectivenessComponent } from './modal-effectiveness.component';

describe('ModalEffectivenessComponent', () => {
  let component: ModalEffectivenessComponent;
  let fixture: ComponentFixture<ModalEffectivenessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEffectivenessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEffectivenessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
