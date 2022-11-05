import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalImpactComponent } from './modal-impact.component';

describe('ModalImpactComponent', () => {
  let component: ModalImpactComponent;
  let fixture: ComponentFixture<ModalImpactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalImpactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalImpactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
