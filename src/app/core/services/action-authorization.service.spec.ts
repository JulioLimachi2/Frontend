import { TestBed } from '@angular/core/testing';

import { ActionAuthorizationService } from './action-authorization.service';

describe('ActionAuthorizationService', () => {
  let service: ActionAuthorizationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActionAuthorizationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
