import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondExerciseComponent } from './second-exercise.component';

describe('SecondExerciseComponent', () => {
  let component: SecondExerciseComponent;
  let fixture: ComponentFixture<SecondExerciseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondExerciseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
