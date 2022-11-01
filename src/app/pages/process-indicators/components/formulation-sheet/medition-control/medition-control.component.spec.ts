import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeditionControlComponent } from './medition-control.component';

describe('MeditionControlComponent', () => {
  let component: MeditionControlComponent;
  let fixture: ComponentFixture<MeditionControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeditionControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeditionControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
