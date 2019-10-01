import { TestBed } from '@angular/core/testing';

import { BootstrapperService } from './bootstrapper.service';

describe('BootstrapperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BootstrapperService = TestBed.get(BootstrapperService);
    expect(service).toBeTruthy();
  });
});
