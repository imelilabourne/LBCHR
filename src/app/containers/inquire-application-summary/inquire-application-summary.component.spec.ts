import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InquireSummaryComponent } from './inquire-application-summary.component';

describe('InquireApplicationSummaryComponent', () => {
  let component: InquireSummaryComponent;
  let fixture: ComponentFixture<InquireSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InquireSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InquireSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
