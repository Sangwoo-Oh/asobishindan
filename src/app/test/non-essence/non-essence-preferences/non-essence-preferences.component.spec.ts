import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonEssencePreferencesComponent } from './non-essence-preferences.component';

describe('NonEssencePreferencesComponent', () => {
  let component: NonEssencePreferencesComponent;
  let fixture: ComponentFixture<NonEssencePreferencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NonEssencePreferencesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NonEssencePreferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
