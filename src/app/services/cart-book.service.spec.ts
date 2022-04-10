import { TestBed } from '@angular/core/testing';

import { CartBookService } from './cart-book.service';

describe('CartBookService', () => {
  let service: CartBookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartBookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
