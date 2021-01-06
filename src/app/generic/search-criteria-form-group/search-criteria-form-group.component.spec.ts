import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCriteriaFormGroupComponent } from './search-criteria-form-group.component';

describe('SearchCriteriaFormGroupComponent', () => {
  let component: SearchCriteriaFormGroupComponent;
  let fixture: ComponentFixture<SearchCriteriaFormGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchCriteriaFormGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCriteriaFormGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
