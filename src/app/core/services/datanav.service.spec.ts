import { TestBed } from '@angular/core/testing';

import { DatanavService } from './datanav.service';

describe('DatanavService', () => {
  let service: DatanavService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatanavService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
