import { TestBed } from '@angular/core/testing';

import { ExpendituresService } from './expenditures.service';

describe('ExpendituresService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExpendituresService = TestBed.get(ExpendituresService);
    expect(service).toBeTruthy();
  });
});
