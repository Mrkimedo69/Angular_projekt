import { Component } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { TrainingModel } from 'src/app/core/models/training.model';
import { TrainingService } from 'src/app/core/services/training.service';
import { ExerciseToTrainingService } from 'src/app/core/services/exerciseToTraining.service';


@Component({
  selector: 'app-training-details',
  templateUrl: './training-details.component.html',
  styleUrls: ['./training-details.component.css']
})
export class TrainingDetailsComponent {
  training: TrainingModel;
  id: number;

  constructor(private trainingService: TrainingService,
              private route: ActivatedRoute,
              private router: Router,
              private exerciseToTrainingService: ExerciseToTrainingService) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.training = this.trainingService.getTraining(this.id);
        }
      );
  }

  onEditTraining() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDeleteTraining() {
    this.trainingService.deleteTraining(this.id);
    this.router.navigate(['/trainings']);
  }

  addExercise(){
    console.log(this.exerciseToTrainingService.pushToTraining())
    
  }
}