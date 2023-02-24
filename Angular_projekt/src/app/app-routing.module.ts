import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditExerciseComponent } from './feature/components/exercise/edit-exercise/edit-exercise.component';
import { ExerciseDetailsComponent } from './feature/components/exercise/exercise-details/exercise-details.component';
import { ExerciseComponent } from './feature/components/exercise/exercise.component';
import { TrainingDetailsComponent } from './feature/components/training/training-details/training-details.component';
import { TrainingEditComponent } from './feature/components/training/training-edit/training-edit.component';
import { TrainingComponent } from './feature/components/training/training.component';

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
