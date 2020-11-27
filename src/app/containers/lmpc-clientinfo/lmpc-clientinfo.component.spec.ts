import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LmpcClientinfoComponent } from './lmpc-clientinfo.component';

describe('LmpcClientinfoComponent', () => {
  let component: LmpcClientinfoComponent;
  let fixture: ComponentFixture<LmpcClientinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LmpcClientinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LmpcClientinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
