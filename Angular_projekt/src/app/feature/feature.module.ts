import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { NgxsModule } from "@ngxs/store";

import { SharedModule } from "../shared/shared.module";
import { ExerciseState } from "./components/exercise/store/exercise.state";



@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        ReactiveFormsModule,
        // NgxsModule.forFeature([ExerciseState])
    ],
    exports: []
})

export class FeaturesModule{}