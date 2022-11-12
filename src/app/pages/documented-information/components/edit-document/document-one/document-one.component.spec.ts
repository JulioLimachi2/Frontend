import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentOneComponent } from './document-one.component';

describe('DocumentOneComponent', () => {
  let component: DocumentOneComponent;
  let fixture: ComponentFixture<DocumentOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
