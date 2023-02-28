import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainingDetailsComponent } from './feature/components/training/training-details/training-details.component';
import { TrainingEditComponent } from './feature/components/training/training-edit/training-edit.component';
import { TrainingComponent } from './feature/components/training/training.component';

const routes: Routes = [

  {path: '', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
