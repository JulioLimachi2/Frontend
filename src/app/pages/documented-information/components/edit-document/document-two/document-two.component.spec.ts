import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentTwoComponent } from './document-two.component';

describe('DocumentTwoComponent', () => {
  let component: DocumentTwoComponent;
  let fixture: ComponentFixture<DocumentTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
