import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareRegisterComponent } from './share-register.component';

describe('ShareRegisterComponent', () => {
  let component: ShareRegisterComponent;
  let fixture: ComponentFixture<ShareRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShareRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
