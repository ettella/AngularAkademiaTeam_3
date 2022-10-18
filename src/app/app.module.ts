import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstExerciseComponent } from './components/first-exercise/first-exercise.component';
import { SecondExerciseComponent } from './components/second-exercise/second-exercise.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AuthComponent } from './components/auth/auth.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StickyNotesContainerComponent } from './components/sticky-notes-container/sticky-notes-container.component';
import { StickyNotesComponent } from './components/sticky-notes/sticky-notes.component';
import { FormComponent } from './components/form/form.component';
import { EditStickysComponent } from './components/edit-stickys/edit-stickys.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { GridExampleComponent } from './components/grid-example/grid-example.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  declarations: [
    AppComponent,
    FirstExerciseComponent,
    SecondExerciseComponent,
    NavbarComponent,
    AuthComponent,
    StickyNotesContainerComponent,
    StickyNotesComponent,
    AccordionComponent,
    FormComponent,
    EditStickysComponent,
    HomePageComponent,
    GridExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    CdkAccordionModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
    MatSidenavModule,
    MatInputModule,
    MatGridListModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
