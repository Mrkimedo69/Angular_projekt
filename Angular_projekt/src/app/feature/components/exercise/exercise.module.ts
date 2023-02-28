import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { AppRoutingModule } from "src/app/app-routing.module";

import { EditExerciseComponent } from "./edit-exercise/edit-exercise.component";
import { ExerciseDetailsComponent } from "./exercise-details/exercise-details.component";
import { ExerciseListComponent } from "./exercise-list/exercise-list.component";
import { ExercisePieceComponent } from "./exercise-list/exercise-piece/exercise-piece.component";
import { ExerciseComponent } from "./exercise.component";
import { SharedModule } from "src/app/shared/shared.module";
import { ExerciseRoutingModule } from "./exercise-routing.module";




@NgModule({
    declarations: [
        ExerciseComponent,
        ExerciseDetailsComponent,
        EditExerciseComponent,
        ExerciseListComponent,
        ExercisePieceComponent
    ],
    imports: [
        CommonModule,
        AppRoutingModule,
        SharedModule,
        ReactiveFormsModule,
        ExerciseRoutingModule
    ],
})

export class ExerciseModule{}