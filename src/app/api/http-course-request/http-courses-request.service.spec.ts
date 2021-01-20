import { TestBed } from '@angular/core/testing';

import { HttpCoursesRequestService } from './http-courses-request.service';

describe('HttpCoursesRequestService', () => {
  let service: HttpCoursesRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpCoursesRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
