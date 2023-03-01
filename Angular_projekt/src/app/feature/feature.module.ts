import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "../app-routing.module";

import { SharedModule } from "../shared/shared.module";
import { TrainingModule } from "./components/training/training.module";



@NgModule({
    imports: [
        CommonModule,
        AppRoutingModule,
        SharedModule,
        ReactiveFormsModule,
        TrainingModule
    ],
    exports: [TrainingModule]
})

export class FeaturesModule{}