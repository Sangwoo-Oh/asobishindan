import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Intro03Component } from './intro03.component';

describe('Intro03Component', () => {
  let component: Intro03Component;
  let fixture: ComponentFixture<Intro03Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Intro03Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Intro03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
