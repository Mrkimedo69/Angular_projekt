import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { ExerciseModel } from 'src/app/core/models/exercise.model';
import { ExerciseService } from 'src/app/core/services/exercise.service';

@Component({
  selector: 'app-exercise-list',
  templateUrl: './exercise-list.component.html',
  styleUrls: ['./exercise-list.component.css']
})
export class ExerciseListComponent implements OnInit, OnDestroy{
  exercises: ExerciseModel[]
  subscription: Subscription

  constructor(private router: Router,
    private exerciseService: ExerciseService,
    private route: ActivatedRoute){}


    ngOnInit() {
      this.subscription = this.exerciseService.exerciseChanged
      .subscribe(
        (exercises: ExerciseModel[]) => {
          this.exercises = exercises;
        }
      );
    this.exercises = this.exerciseService.getExercises();
    }
  
    onNewExercise() {
      this.router.navigate(['new'], {relativeTo: this.route});
    }
  
    ngOnDestroy() {
      this.subscription.unsubscribe();
    }
}
