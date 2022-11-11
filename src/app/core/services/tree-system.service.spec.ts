import { TestBed } from '@angular/core/testing';

import { TreeSystemService } from './tree-system.service';

describe('TreeSystemService', () => {
  let service: TreeSystemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TreeSystemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
