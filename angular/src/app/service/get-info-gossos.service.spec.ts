import { TestBed } from '@angular/core/testing';

import { GetInfoGossosService } from './get-info-gossos.service';

describe('GetInfoGossosService', () => {
  let service: GetInfoGossosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetInfoGossosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
