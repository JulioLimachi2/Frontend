import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditDocsComponent } from './modal-edit-docs.component';

describe('ModalEditDocsComponent', () => {
  let component: ModalEditDocsComponent;
  let fixture: ComponentFixture<ModalEditDocsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEditDocsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEditDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
