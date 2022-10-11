import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstExerciseComponent } from './components/week_1/first-exercise/first-exercise.component';
import { SecondExerciseComponent } from './components/week_1/second-exercise/second-exercise.component';
import { NavbarComponent } from './components/week_1/navbar/navbar.component';
import { AuthComponent } from './components/week_1/auth/auth.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StickyNotesContainerComponent } from './components/week_1/sticky-notes-container/sticky-notes-container.component';
import { StickyNotesComponent } from './components/week_1/sticky-notes/sticky-notes.component';
import { FormComponent } from './components/week_1/form/form.component';
import { EditStickysComponent } from './components/week_1/edit-stickys/edit-stickys.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstExerciseComponent,
    SecondExerciseComponent,
    NavbarComponent,
    AuthComponent,
    StickyNotesContainerComponent,
    StickyNotesComponent,
    FormComponent,
    EditStickysComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
