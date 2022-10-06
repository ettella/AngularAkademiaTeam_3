import { FourthExerciseComponent } from './components/fourth-exercise/fourth-exercise.component';
import { FirstExerciseComponent } from './components/first-exercise/first-exercise.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecondExerciseComponent } from './components/second-exercise/second-exercise.component';
import { ThirdExerciseComponent } from './components/third-exercise/third-exercise.component';

const routes: Routes = [
  {path: 'task-1', component: FirstExerciseComponent},
  {path: 'task-2', component: SecondExerciseComponent},
  {path: 'task-3', component: ThirdExerciseComponent},
  {path: 'task-4', component: FourthExerciseComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
