import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByStateReportingComponent } from './by-state-reporting.component';

describe('ByStateReportingComponent', () => {
  let component: ByStateReportingComponent;
  let fixture: ComponentFixture<ByStateReportingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ByStateReportingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ByStateReportingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
