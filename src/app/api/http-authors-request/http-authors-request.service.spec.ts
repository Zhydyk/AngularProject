import { TestBed } from '@angular/core/testing';

import { HttpAuthorsRequestService } from './http-authors-request.service';

describe('HttpAuthorsRequestService', () => {
  let service: HttpAuthorsRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpAuthorsRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
