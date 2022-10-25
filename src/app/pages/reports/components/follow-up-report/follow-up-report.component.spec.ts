import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowUpReportComponent } from './follow-up-report.component';

describe('FollowUpReportComponent', () => {
  let component: FollowUpReportComponent;
  let fixture: ComponentFixture<FollowUpReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FollowUpReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowUpReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
