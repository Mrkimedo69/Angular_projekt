import { Component, Input } from '@angular/core';

import { TrainingModel } from 'src/app/core/models/training.model';

@Component({
  selector: 'app-training-bpart',
  templateUrl: './training-bpart.component.html',
  styleUrls: ['./training-bpart.component.css']
})
export class TrainingBpartComponent {

  @Input() training: TrainingModel
  @Input() index: number
}
