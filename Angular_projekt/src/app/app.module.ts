import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/header/header.component';
import { TrainingComponent } from './core/components/training/training.component';
import { EditTrainingComponent } from './core/components/training/edit-training/edit-training.component';
import { ExerciseComponent } from './core/components/exercise/exercise.component';
import { ExerciseListComponent } from './core/components/exercise/exercise-list/exercise-list.component';
import { EditExerciseComponent } from './core/components/exercise/edit-exercise/edit-exercise.component';
import { ExerciseDetailsComponent } from './core/components/exercise/exercise-details/exercise-details.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ExercisePieceComponent } from './core/components/exercise/exercise-list/exercise-piece/exercise-piece.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SafePipe } from './shared/safeulr.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TrainingComponent,
    EditTrainingComponent,
    ExerciseComponent,
    ExerciseListComponent,
    EditExerciseComponent,
    ExerciseDetailsComponent,
    DropdownDirective,
    ExercisePieceComponent,
    SafePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
