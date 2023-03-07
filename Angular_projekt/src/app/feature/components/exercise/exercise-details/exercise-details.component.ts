import { Component } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { ExerciseModel } from 'src/app/core/models/exercise.model';
import { ExerciseService } from 'src/app/feature/components/exercise/services/exercise.service';
import { ExerciseToTrainingService } from 'src/app/core/services/exercise-training.service';

@Component({
  selector: 'app-exercise-details',
  templateUrl: './exercise-details.component.html',
  styleUrls: ['./exercise-details.component.css']
})
export class ExerciseDetailsComponent {
  exercise: ExerciseModel ;
  id: string;

  constructor(private exerciseService: ExerciseService,
              private route: ActivatedRoute,
              private router: Router,
              private exerciseToTrainingService: ExerciseToTrainingService) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.exerciseService.getExercises().subscribe((res) => {
            this.exercise = res.find(p => p.id === params.id)
          })
        }
      );
  }

  onEditExercise() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDeleteExercise() {
    // this.exerciseService.deleteExercise(this.id);
    // this.router.navigate(['/exercise']);
  }

  onAddTraining(){
    this.exerciseToTrainingService.pullExercise(this.exercise)
  }

}