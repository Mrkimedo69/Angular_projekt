import { Component, Input } from '@angular/core';

import { ExerciseModel } from 'src/app/core/models/exercise.model';

@Component({
  selector: 'app-exercise-piece',
  templateUrl: './exercise-piece.component.html',
  styleUrls: ['./exercise-piece.component.css']
})
export class ExercisePieceComponent {

  @Input() exercise: ExerciseModel
  @Input() index: number

}
