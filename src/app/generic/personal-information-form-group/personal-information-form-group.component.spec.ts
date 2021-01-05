import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalInformationFormGroupComponent } from './personal-information-form-group.component';

describe('PersonalInformationFormGroupComponent', () => {
  let component: PersonalInformationFormGroupComponent;
  let fixture: ComponentFixture<PersonalInformationFormGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalInformationFormGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalInformationFormGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
