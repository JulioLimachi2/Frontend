import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulationSheetComponent } from './formulation-sheet.component';

describe('FormulationSheetComponent', () => {
  let component: FormulationSheetComponent;
  let fixture: ComponentFixture<FormulationSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulationSheetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulationSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
