import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarningErrorComponent } from './warning-error.component';

describe('WarningErrorComponent', () => {
  let component: WarningErrorComponent;
  let fixture: ComponentFixture<WarningErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarningErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarningErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
