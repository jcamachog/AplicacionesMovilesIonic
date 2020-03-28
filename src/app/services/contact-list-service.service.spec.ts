import { TestBed } from '@angular/core/testing';

import { ContactListServiceService } from './contact-list-service.service';

describe('ContactListServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContactListServiceService = TestBed.get(ContactListServiceService);
    expect(service).toBeTruthy();
  });
});
