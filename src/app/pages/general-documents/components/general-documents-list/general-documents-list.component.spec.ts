import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralDocumentsListComponent } from './general-documents-list.component';

describe('GeneralDocumentsListComponent', () => {
  let component: GeneralDocumentsListComponent;
  let fixture: ComponentFixture<GeneralDocumentsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralDocumentsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralDocumentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
