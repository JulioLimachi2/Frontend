import { TestBed } from '@angular/core/testing';

import { TreeFileService } from './tree-file.service';

describe('TreeFileService', () => {
  let service: TreeFileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TreeFileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
