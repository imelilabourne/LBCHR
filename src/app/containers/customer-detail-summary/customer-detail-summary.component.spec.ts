import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDetailSummaryComponent } from './customer-detail-summary.component';

describe('CustomerDetailSummaryComponent', () => {
  let component: CustomerDetailSummaryComponent;
  let fixture: ComponentFixture<CustomerDetailSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerDetailSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerDetailSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
