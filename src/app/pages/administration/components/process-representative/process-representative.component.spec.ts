import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessRepresentativeComponent } from './process-representative.component';

describe('ProcessRepresentativeComponent', () => {
  let component: ProcessRepresentativeComponent;
  let fixture: ComponentFixture<ProcessRepresentativeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessRepresentativeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessRepresentativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
