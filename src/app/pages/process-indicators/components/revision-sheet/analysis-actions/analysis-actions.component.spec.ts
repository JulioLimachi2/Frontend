import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisActionsComponent } from './analysis-actions.component';

describe('AnalysisActionsComponent', () => {
  let component: AnalysisActionsComponent;
  let fixture: ComponentFixture<AnalysisActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalysisActionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalysisActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
