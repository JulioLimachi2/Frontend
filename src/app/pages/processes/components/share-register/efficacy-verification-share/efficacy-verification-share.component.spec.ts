import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EfficacyVerificationShareComponent } from './efficacy-verification-share.component';

describe('EfficacyVerificationShareComponent', () => {
  let component: EfficacyVerificationShareComponent;
  let fixture: ComponentFixture<EfficacyVerificationShareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EfficacyVerificationShareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EfficacyVerificationShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
