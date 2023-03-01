import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {path: '', redirectTo: '', pathMatch: 'full'},
  {path:'exercise', loadChildren: () => import('./feature/components/exercise/exercise.module').then(m => m.ExerciseModule)},
  {path:'training', loadChildren: () => import('./feature/components/training/training.module').then(m => m.TrainingModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
