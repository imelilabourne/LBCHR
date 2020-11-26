import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLMPCComponent } from './create-lmpc.component';

describe('CreateLMPCComponent', () => {
  let component: CreateLMPCComponent;
  let fixture: ComponentFixture<CreateLMPCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateLMPCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateLMPCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
