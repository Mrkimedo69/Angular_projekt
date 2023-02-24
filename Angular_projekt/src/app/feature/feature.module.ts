import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "../app-routing.module";

import { SharedModule } from "../shared/shared.module";
import { EditExerciseComponent } from "./components/exercise/edit-exercise/edit-exercise.component";
import { ExerciseDetailsComponent } from "./components/exercise/exercise-details/exercise-details.component";
import { ExerciseListComponent } from "./components/exercise/exercise-list/exercise-list.component";
import { ExercisePieceComponent } from "./components/exercise/exercise-list/exercise-piece/exercise-piece.component";
import { ExerciseComponent } from "./components/exercise/exercise.component";
import { TrainingDetailsComponent } from "./components/training/training-details/training-details.component";
import { TrainingEditComponent } from "./components/training/training-edit/training-edit.component";
import { TrainingBpartComponent } from "./components/training/training-list/training-bpart/training-bpart.component";
import { TrainingListComponent } from "./components/training/training-list/training-list.component";
import { TrainingComponent } from "./components/training/training.component";


@NgModule({
    declarations: [
        ExerciseComponent,
        TrainingComponent,
        EditExerciseComponent,
        ExerciseDetailsComponent,
        ExerciseListComponent,
        ExercisePieceComponent,
        TrainingDetailsComponent,
        TrainingEditComponent,
        TrainingListComponent,
        TrainingBpartComponent
    ],
    imports: [
        CommonModule,
        AppRoutingModule,
        SharedModule,
        ReactiveFormsModule
    ],
    exports: [ExerciseComponent,TrainingComponent]
})

export class FeaturesModule{}