import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowUpShareComponent } from './follow-up-share.component';

describe('FollowUpShareComponent', () => {
  let component: FollowUpShareComponent;
  let fixture: ComponentFixture<FollowUpShareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FollowUpShareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowUpShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
