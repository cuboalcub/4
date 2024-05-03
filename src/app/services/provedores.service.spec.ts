/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProvedoresService } from './provedores.service';

describe('Service: Provedores', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProvedoresService]
    });
  });

  it('should ...', inject([ProvedoresService], (service: ProvedoresService) => {
    expect(service).toBeTruthy();
  }));
});
