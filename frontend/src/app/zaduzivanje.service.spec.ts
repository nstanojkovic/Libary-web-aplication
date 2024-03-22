import { TestBed } from '@angular/core/testing';

import { ZaduzivanjeService } from './zaduzivanje.service';

describe('ZaduzivanjeService', () => {
  let service: ZaduzivanjeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZaduzivanjeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
