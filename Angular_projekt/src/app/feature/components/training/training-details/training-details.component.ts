import { Component } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { TrainingModel } from 'src/app/feature/models/training.model';
import { TrainingService } from 'src/app/feature/services/training.service';
import { ExerciseToTrainingService } from 'src/app/feature/services/exercise-training.service';


@Component({
  selector: 'app-training-details',
  templateUrl: './training-details.component.html',
  styleUrls: ['./training-details.component.css']
})
export class TrainingDetailsComponent {
  training: TrainingModel;
  id: string;

  constructor(private trainingService: TrainingService,
              private route: ActivatedRoute,
              private router: Router,
              private exerciseToTrainingService: ExerciseToTrainingService) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.trainingService.getTrainings().subscribe((res) => {
            this.training = res.find(p => p.id === params.id)
            console.log(this.training)
          })
        }
      );
  }

  onEditTraining() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDeleteTraining() {
    // this.trainingService.deleteTraining(this.id);
    // this.router.navigate(['/training']);
  }

  // addExercise(){
  //   console.log(this.exerciseToTrainingService.pushToTraining())
    
  // }
}