import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSourceComponent } from './modal-source.component';

describe('ModalSourceComponent', () => {
  let component: ModalSourceComponent;
  let fixture: ComponentFixture<ModalSourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalSourceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalSourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
