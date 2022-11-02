import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EffectivenessComponent } from './effectiveness.component';

describe('EffectivenessComponent', () => {
  let component: EffectivenessComponent;
  let fixture: ComponentFixture<EffectivenessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EffectivenessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EffectivenessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
