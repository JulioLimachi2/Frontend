import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SgcIsoComponent } from './sgc-iso.component';

describe('SgcIsoComponent', () => {
  let component: SgcIsoComponent;
  let fixture: ComponentFixture<SgcIsoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SgcIsoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SgcIsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
