import { TestBed } from '@angular/core/testing';

import { IstorijaService } from './istorija.service';

describe('IstorijaService', () => {
  let service: IstorijaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IstorijaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
