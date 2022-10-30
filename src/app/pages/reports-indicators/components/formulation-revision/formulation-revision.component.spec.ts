import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulationRevisionComponent } from './formulation-revision.component';

describe('FormulationRevisionComponent', () => {
  let component: FormulationRevisionComponent;
  let fixture: ComponentFixture<FormulationRevisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulationRevisionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulationRevisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
