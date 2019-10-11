import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobInforPage } from './job-infor.page';

describe('JobInforPage', () => {
  let component: JobInforPage;
  let fixture: ComponentFixture<JobInforPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobInforPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobInforPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
