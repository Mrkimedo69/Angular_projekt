import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { ExerciseModel } from 'src/app/feature/models/exercise.model';
import { ExerciseService } from 'src/app/feature/services/exercise.service';

@Component({
  selector: 'app-exercise-list',
  templateUrl: './exercise-list.component.html',
  styleUrls: ['./exercise-list.component.css']
})
export class ExerciseListComponent implements OnInit{
  exercises: ExerciseModel[]
  subscription: Subscription

  constructor(private router: Router,
    private exerciseService: ExerciseService,
    private route: ActivatedRoute){}


    ngOnInit() {
      this.exerciseService.exerciseChanged
        .subscribe(
          (exercises: ExerciseModel[]) => {
            this.exercises = exercises;
          }
        );
    this.exerciseService.getExercises().subscribe((res:ExerciseModel[]) =>{
      this.exercises = res
    })
    }
  
    onNewExercise() {
      this.router.navigate(['new'], {relativeTo: this.route});
    }
  
}
