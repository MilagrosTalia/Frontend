import { TestBed } from '@angular/core/testing';

import { PeluqueroService } from './peluquero.service';

describe('PeluqueroService', () => {
  let service: PeluqueroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeluqueroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
