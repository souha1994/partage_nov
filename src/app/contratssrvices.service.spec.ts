import { TestBed } from '@angular/core/testing';

import { ContratssrvicesService } from './contratssrvices.service';

describe('ContratssrvicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContratssrvicesService = TestBed.get(ContratssrvicesService);
    expect(service).toBeTruthy();
  });
});
