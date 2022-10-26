import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EfficacyVerificationComponent } from './efficacy-verification.component';

describe('EfficacyVerificationComponent', () => {
  let component: EfficacyVerificationComponent;
  let fixture: ComponentFixture<EfficacyVerificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EfficacyVerificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EfficacyVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
