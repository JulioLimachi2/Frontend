import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevisionSheetComponent } from './revision-sheet.component';

describe('RevisionSheetComponent', () => {
  let component: RevisionSheetComponent;
  let fixture: ComponentFixture<RevisionSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevisionSheetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RevisionSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
