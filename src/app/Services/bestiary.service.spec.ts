import { TestBed } from '@angular/core/testing';

import { BestiaryService } from './bestiary.service';

describe('BestiaryService', () => {
  let service: BestiaryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BestiaryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
