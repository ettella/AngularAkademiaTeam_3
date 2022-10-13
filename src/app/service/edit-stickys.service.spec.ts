import { TestBed } from '@angular/core/testing';

import { EditStickysService } from './edit-stickys.service';

describe('EditStickysService', () => {
  let service: EditStickysService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditStickysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
