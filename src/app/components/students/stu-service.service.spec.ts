import { TestBed } from '@angular/core/testing';

import { StuServiceService } from './stu-service.service';

describe('StuServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StuServiceService = TestBed.get(StuServiceService);
    expect(service).toBeTruthy();
  });
});
