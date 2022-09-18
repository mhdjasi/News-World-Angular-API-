import { TestBed } from '@angular/core/testing';

import { NewsapisevicesService } from './newsapisevices.service';

describe('NewsapisevicesService', () => {
  let service: NewsapisevicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsapisevicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
