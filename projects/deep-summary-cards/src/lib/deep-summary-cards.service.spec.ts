import { TestBed } from '@angular/core/testing';

import { DeepSummaryCardsService } from './deep-summary-cards.service';

describe('DeepSummaryCardsService', () => {
  let service: DeepSummaryCardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeepSummaryCardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
