import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EssenceComponent } from './essence.component';

describe('EssenceComponent', () => {
  let component: EssenceComponent;
  let fixture: ComponentFixture<EssenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EssenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EssenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
