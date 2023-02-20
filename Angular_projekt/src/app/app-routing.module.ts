import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditExerciseComponent } from './core/components/exercise/edit-exercise/edit-exercise.component';
import { ExerciseDetailsComponent } from './core/components/exercise/exercise-details/exercise-details.component';
import { ExerciseComponent } from './core/components/exercise/exercise.component';

const routes: Routes = [
  {
    path: 'exercise',
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
