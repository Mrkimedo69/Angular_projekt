import { Component } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { ExerciseModel } from 'src/app/feature/models/exercise.model';
import { ExerciseService } from 'src/app/feature/services/exercise.service';
import { ExerciseToTrainingService } from 'src/app/feature/services/exerciseToTraining.service';

@Component({
  selector: 'app-exercise-details',
  templateUrl: './exercise-details.component.html',
  styleUrls: ['./exercise-details.component.css']
})
export class ExerciseDetailsComponent {
  exercise: ExerciseModel;
  id: number;

  constructor(private exerciseService: ExerciseService,
              private route: ActivatedRoute,
              private router: Router,
              private exerciseToTrainingService: ExerciseToTrainingService) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.exercise  = this.exerciseService.getExercise(this.id);
        }
      );
  }

  onEditExercise() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDeleteExercise() {
    this.exerciseService.deleteExercise(this.id);
    this.router.navigate(['/exercise']);
  }

  onAddTraining(){
    console.log(this.exercise)
    this.exerciseToTrainingService.pullExercise(this.exercise)
  }

}