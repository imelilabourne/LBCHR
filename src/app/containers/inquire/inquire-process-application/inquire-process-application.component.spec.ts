import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InquireProcessApplicationComponent } from './inquire-process-application.component';

describe('InquireProcessApplicationComponent', () => {
  let component: InquireProcessApplicationComponent;
  let fixture: ComponentFixture<InquireProcessApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InquireProcessApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InquireProcessApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
