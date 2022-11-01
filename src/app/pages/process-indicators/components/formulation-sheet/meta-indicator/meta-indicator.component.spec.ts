import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetaIndicatorComponent } from './meta-indicator.component';

describe('MetaIndicatorComponent', () => {
  let component: MetaIndicatorComponent;
  let fixture: ComponentFixture<MetaIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetaIndicatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetaIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
