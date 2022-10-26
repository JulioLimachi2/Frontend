import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListActionsAuthorizationComponent } from './list-actions-authorization.component';

describe('ListActionsAuthorizationComponent', () => {
  let component: ListActionsAuthorizationComponent;
  let fixture: ComponentFixture<ListActionsAuthorizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListActionsAuthorizationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListActionsAuthorizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
