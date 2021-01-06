import { TestBed } from '@angular/core/testing';

import { HttpAuthRequestService } from './http-auth-request.service';

describe('HttpAuthRequestService', () => {
  let service: HttpAuthRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpAuthRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
