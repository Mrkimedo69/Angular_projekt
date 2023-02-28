import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { TrainingDetailsComponent } from "./training-details/training-details.component";
import { TrainingEditComponent } from "./training-edit/training-edit.component";
import { TrainingComponent } from "./training.component";


const routes: Routes = [
    {
        path: 'training',
        component: TrainingComponent,
        children: [
          { path: 'new', component: TrainingEditComponent},
          {
            path: ':id',
            component: TrainingDetailsComponent
          },
          {
            path: ':id/edit',
            component: TrainingEditComponent
          }
        ]
      }

]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class TrainingRoutingModule{}