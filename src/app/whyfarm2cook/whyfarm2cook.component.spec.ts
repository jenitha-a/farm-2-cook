import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Whyfarm2cookComponent } from './whyfarm2cook.component';

describe('Whyfarm2cookComponent', () => {
  let component: Whyfarm2cookComponent;
  let fixture: ComponentFixture<Whyfarm2cookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Whyfarm2cookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Whyfarm2cookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
