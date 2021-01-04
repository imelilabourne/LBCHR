import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InquireMaintenanceComponent } from './inquire-maintenance.component';

describe('InquireMaintenanceComponent', () => {
  let component: InquireMaintenanceComponent;
  let fixture: ComponentFixture<InquireMaintenanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InquireMaintenanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InquireMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
