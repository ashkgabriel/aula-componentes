import { TestBed } from '@angular/core/testing';

import { ClientesharedclienteService } from './clientesharedcliente.service';

describe('ClientesharedclienteService', () => {
  let service: ClientesharedclienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientesharedclienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
