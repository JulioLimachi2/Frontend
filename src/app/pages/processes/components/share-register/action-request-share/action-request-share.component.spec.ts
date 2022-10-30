import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionRequestShareComponent } from './action-request-share.component';

describe('ActionRequestShareComponent', () => {
  let component: ActionRequestShareComponent;
  let fixture: ComponentFixture<ActionRequestShareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionRequestShareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionRequestShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
