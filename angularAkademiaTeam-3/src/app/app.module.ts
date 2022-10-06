import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstExerciseComponent } from './components/first-exercise/first-exercise.component';
import { SecondExerciseComponent } from './components/second-exercise/second-exercise.component';
import { FourthExerciseComponent } from './components/fourth-exercise/fourth-exercise.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ThirdExerciseComponent } from './components/third-exercise/third-exercise.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstExerciseComponent,
    SecondExerciseComponent,
    FourthExerciseComponent,
    NavbarComponent,
    ThirdExerciseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
