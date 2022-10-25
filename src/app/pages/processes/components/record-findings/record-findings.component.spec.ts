import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordFindingsComponent } from './record-findings.component';

describe('RecordFindingsComponent', () => {
  let component: RecordFindingsComponent;
  let fixture: ComponentFixture<RecordFindingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecordFindingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordFindingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
