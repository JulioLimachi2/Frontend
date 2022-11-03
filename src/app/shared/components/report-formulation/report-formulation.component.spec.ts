import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportFormulationComponent } from './report-formulation.component';

describe('ReportFormulationComponent', () => {
  let component: ReportFormulationComponent;
  let fixture: ComponentFixture<ReportFormulationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportFormulationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportFormulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
