import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/header/header.component';
import { TrainingComponent } from './core/components/training/training.component';
import { ExerciseComponent } from './core/components/exercise/exercise.component';
import { ExerciseListComponent } from './core/components/exercise/exercise-list/exercise-list.component';
import { EditExerciseComponent } from './core/components/exercise/edit-exercise/edit-exercise.component';
import { ExerciseDetailsComponent } from './core/components/exercise/exercise-details/exercise-details.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ExercisePieceComponent } from './core/components/exercise/exercise-list/exercise-piece/exercise-piece.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SafePipe } from './shared/safeulr.pipe';
import { TrainingEditComponent } from './core/components/training/training-edit/training-edit.component';
import { TrainingListComponent } from './core/components/training/training-list/training-list.component';
import { TrainingDetailsComponent } from './core/components/training/training-details/training-details.component';
import { TrainingBpartComponent } from './core/components/training/training-list/training-bpart/training-bpart.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TrainingComponent,
    ExerciseComponent,
    ExerciseListComponent,
    EditExerciseComponent,
    ExerciseDetailsComponent,
    DropdownDirective,
    ExercisePieceComponent,
    SafePipe,
    TrainingEditComponent,
    TrainingListComponent,
    TrainingDetailsComponent,
    TrainingBpartComponent,
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
