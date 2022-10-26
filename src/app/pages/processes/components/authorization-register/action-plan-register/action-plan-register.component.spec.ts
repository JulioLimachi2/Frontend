import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionPlanRegisterComponent } from './action-plan-register.component';

describe('ActionPlanRegisterComponent', () => {
  let component: ActionPlanRegisterComponent;
  let fixture: ComponentFixture<ActionPlanRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionPlanRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionPlanRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
