import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { EditExerciseComponent } from "./edit-exercise/edit-exercise.component";
import { ExerciseDetailsComponent } from "./exercise-details/exercise-details.component";
import { ExerciseComponent } from "./exercise.component";



const routes: Routes = [
    {
        path: '',
        component: ExerciseComponent,
        children: [
          { path: 'new', component: EditExerciseComponent},
          {
            path: ':id',
            component: ExerciseDetailsComponent
          },
          {
            path: ':id/edit',
            component: EditExerciseComponent
          }
        ]
    }
]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]

})

export class ExerciseRoutingModule{}