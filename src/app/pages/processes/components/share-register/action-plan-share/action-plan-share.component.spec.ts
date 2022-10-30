import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionPlanShareComponent } from './action-plan-share.component';

describe('ActionPlanShareComponent', () => {
  let component: ActionPlanShareComponent;
  let fixture: ComponentFixture<ActionPlanShareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionPlanShareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionPlanShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
