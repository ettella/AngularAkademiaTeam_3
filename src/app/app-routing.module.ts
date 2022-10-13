import { FirstExerciseComponent } from './components/week_1/first-exercise/first-exercise.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecondExerciseComponent } from './components/week_1/second-exercise/second-exercise.component';
import { AuthComponent } from './components/week_1/auth/auth.component';
import { AuthGuard } from './service/authguard.service';
import { StickyNotesContainerComponent } from './components/week_1/sticky-notes-container/sticky-notes-container.component';
import { EditStickysComponent } from './components/week_1/edit-stickys/edit-stickys.component';
import { AccordionComponent } from './components/week_1/accordion/accordion.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { GridExampleComponent } from './components/grid-example/grid-example.component';


const routes: Routes = [
  {path: '', component: AuthComponent},
  {path: 'task-1', component: FirstExerciseComponent,  canActivate:[AuthGuard]},
  {path: 'home', component: HomePageComponent,  canActivate:[AuthGuard]},
  {path: 'accordion', component: AccordionComponent,  canActivate:[AuthGuard]},
  {path: 'grid', component: GridExampleComponent,  canActivate:[AuthGuard]},
  {path: 'task-2', component: SecondExerciseComponent, canActivate:[AuthGuard]},
  {path: 'sticky', component: StickyNotesContainerComponent, canActivate:[AuthGuard]},
  {path: 'edit-note/:id', component: EditStickysComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
