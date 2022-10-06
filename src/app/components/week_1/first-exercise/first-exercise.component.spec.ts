import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstExerciseComponent } from './first-exercise.component';

describe('FirstExerciseComponent', () => {
  let component: FirstExerciseComponent;
  let fixture: ComponentFixture<FirstExerciseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstExerciseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
