import { FirstExerciseComponent } from './components/week_1/first-exercise/first-exercise.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecondExerciseComponent } from './components/week_1/second-exercise/second-exercise.component';
import { AuthComponent } from './components/week_1/auth/auth.component';
import { AuthGuard } from './components/week_1/service/authguard.service';
import { FormComponent } from './components/week_1/form/form.component';


const routes: Routes = [
  {path: '', component: AuthComponent},
  {path: 'task-1', component: FirstExerciseComponent,  canActivate:[AuthGuard]},
  {path: 'task-2', component: SecondExerciseComponent, canActivate:[AuthGuard]},
  {path: 'sticky', component: FormComponent, canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
