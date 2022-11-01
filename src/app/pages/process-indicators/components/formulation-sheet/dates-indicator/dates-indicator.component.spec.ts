import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatesIndicatorComponent } from './dates-indicator.component';

describe('DatesIndicatorComponent', () => {
  let component: DatesIndicatorComponent;
  let fixture: ComponentFixture<DatesIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatesIndicatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatesIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
