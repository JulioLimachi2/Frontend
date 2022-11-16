import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalDocumentsComponent } from './internal-documents.component';

describe('InternalDocumentsComponent', () => {
  let component: InternalDocumentsComponent;
  let fixture: ComponentFixture<InternalDocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternalDocumentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
