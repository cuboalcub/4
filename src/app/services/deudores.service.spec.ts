import { TestBed } from '@angular/core/testing';

import { DeudoresService } from './deudores.service';

describe('DeudoresService', () => {
  let service: DeudoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeudoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
