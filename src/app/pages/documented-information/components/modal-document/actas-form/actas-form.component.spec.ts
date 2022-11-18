import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActasFormComponent } from './actas-form.component';

describe('ActasFormComponent', () => {
  let component: ActasFormComponent;
  let fixture: ComponentFixture<ActasFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActasFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActasFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
