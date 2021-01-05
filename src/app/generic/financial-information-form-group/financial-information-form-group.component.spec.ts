import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialInformationFormGroupComponent } from './financial-information-form-group.component';

describe('FinancialInformationFormGroupComponent', () => {
  let component: FinancialInformationFormGroupComponent;
  let fixture: ComponentFixture<FinancialInformationFormGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinancialInformationFormGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialInformationFormGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
