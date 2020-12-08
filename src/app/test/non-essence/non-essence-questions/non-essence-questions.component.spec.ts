import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonEssenceQuestionsComponent } from './non-essence-questions.component';

describe('NonEssenceQuestionsComponent', () => {
  let component: NonEssenceQuestionsComponent;
  let fixture: ComponentFixture<NonEssenceQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NonEssenceQuestionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NonEssenceQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
