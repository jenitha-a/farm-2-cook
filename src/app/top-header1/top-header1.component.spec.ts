import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopHeader1Component } from './top-header1.component';

describe('TopHeader1Component', () => {
  let component: TopHeader1Component;
  let fixture: ComponentFixture<TopHeader1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopHeader1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopHeader1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
