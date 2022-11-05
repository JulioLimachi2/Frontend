import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAssetInventoryComponent } from './modal-asset-inventory.component';

describe('ModalAssetInventoryComponent', () => {
  let component: ModalAssetInventoryComponent;
  let fixture: ComponentFixture<ModalAssetInventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAssetInventoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAssetInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
