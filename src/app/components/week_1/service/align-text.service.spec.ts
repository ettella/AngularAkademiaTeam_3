import { TestBed } from '@angular/core/testing';

import { AlignTextService } from './align-text.service';

describe('AlignTextService', () => {
  let service: AlignTextService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlignTextService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
