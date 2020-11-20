import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Intro02Component } from './intro02.component';

describe('Intro02Component', () => {
  let component: Intro02Component;
  let fixture: ComponentFixture<Intro02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Intro02Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Intro02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
