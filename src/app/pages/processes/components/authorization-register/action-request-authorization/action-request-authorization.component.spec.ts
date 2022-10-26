import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionRequestAuthorizationComponent } from './action-request-authorization.component';

describe('ActionRequestAuthorizationComponent', () => {
  let component: ActionRequestAuthorizationComponent;
  let fixture: ComponentFixture<ActionRequestAuthorizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionRequestAuthorizationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionRequestAuthorizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
