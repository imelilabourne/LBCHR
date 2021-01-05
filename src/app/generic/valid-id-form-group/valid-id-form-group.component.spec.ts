import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidIdFormGroupComponent } from './valid-id-form-group.component';

describe('ValidIdFormGroupComponent', () => {
  let component: ValidIdFormGroupComponent;
  let fixture: ComponentFixture<ValidIdFormGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidIdFormGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidIdFormGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
