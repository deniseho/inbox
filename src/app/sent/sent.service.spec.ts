import { TestBed } from '@angular/core/testing';

import { SentService } from './sent.service';

describe('SentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SentService = TestBed.get(SentService);
    expect(service).toBeTruthy();
  });
});
