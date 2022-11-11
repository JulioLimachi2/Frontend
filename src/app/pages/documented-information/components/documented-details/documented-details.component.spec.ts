import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentedDetailsComponent } from './documented-details.component';

describe('DocumentedDetailsComponent', () => {
  let component: DocumentedDetailsComponent;
  let fixture: ComponentFixture<DocumentedDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentedDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentedDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
