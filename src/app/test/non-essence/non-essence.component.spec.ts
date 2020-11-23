import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonEssenceComponent } from './non-essence.component';

describe('NonEssenceComponent', () => {
  let component: NonEssenceComponent;
  let fixture: ComponentFixture<NonEssenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NonEssenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NonEssenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
