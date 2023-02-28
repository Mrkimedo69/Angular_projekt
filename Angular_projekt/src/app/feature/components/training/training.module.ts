import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "src/app/app-routing.module";

import { TrainingDetailsComponent } from "./training-details/training-details.component";
import { TrainingEditComponent } from "./training-edit/training-edit.component";
import { TrainingBpartComponent } from "./training-list/training-bpart/training-bpart.component";
import { TrainingListComponent } from "./training-list/training-list.component";
import { TrainingComponent } from "./training.component";
import { SharedModule } from "src/app/shared/shared.module";
import { TrainingRoutingModule } from "./training-routing.module";


@NgModule({
    declarations: [
        TrainingComponent,
        TrainingDetailsComponent,
        TrainingEditComponent,
        TrainingListComponent,
        TrainingBpartComponent
    ],
    imports: [
        CommonModule,
        AppRoutingModule,
        SharedModule,
        ReactiveFormsModule,
        TrainingRoutingModule
    ],
})


export class TrainingModule{}