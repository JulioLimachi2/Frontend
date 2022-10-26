import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowUpActionComponent } from './follow-up-action.component';

describe('FollowUpActionComponent', () => {
  let component: FollowUpActionComponent;
  let fixture: ComponentFixture<FollowUpActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FollowUpActionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowUpActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
