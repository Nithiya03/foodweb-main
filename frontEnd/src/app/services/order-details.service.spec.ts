import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { OrderDetailsService } from '../services/order-details.service';

describe('OrderDetailsService', () => {
  let service: OrderDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(OrderDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
