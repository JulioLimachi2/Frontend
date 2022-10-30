import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListActionsShareComponent } from './list-actions-share.component';

describe('ListActionsShareComponent', () => {
  let component: ListActionsShareComponent;
  let fixture: ComponentFixture<ListActionsShareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListActionsShareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListActionsShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
