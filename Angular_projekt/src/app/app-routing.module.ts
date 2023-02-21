import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditExerciseComponent } from './core/components/exercise/edit-exercise/edit-exercise.component';
import { ExerciseDetailsComponent } from './core/components/exercise/exercise-details/exercise-details.component';
import { ExerciseComponent } from './core/components/exercise/exercise.component';
import { TrainingDetailsComponent } from './core/components/training/training-details/training-details.component';
import { TrainingEditComponent } from './core/components/training/training-edit/training-edit.component';
import { TrainingComponent } from './core/components/training/training.component';

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
  },
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
