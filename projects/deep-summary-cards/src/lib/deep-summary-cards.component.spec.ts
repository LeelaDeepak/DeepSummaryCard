import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeepSummaryCardsComponent } from './deep-summary-cards.component';

describe('DeepSummaryCardsComponent', () => {
  let component: DeepSummaryCardsComponent;
  let fixture: ComponentFixture<DeepSummaryCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeepSummaryCardsComponent]
    });
    fixture = TestBed.createComponent(DeepSummaryCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
