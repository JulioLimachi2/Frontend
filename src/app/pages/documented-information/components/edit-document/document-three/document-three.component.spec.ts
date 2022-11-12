import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentThreeComponent } from './document-three.component';

describe('DocumentThreeComponent', () => {
  let component: DocumentThreeComponent;
  let fixture: ComponentFixture<DocumentThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
