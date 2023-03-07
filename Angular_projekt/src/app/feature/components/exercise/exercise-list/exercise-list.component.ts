import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { ExerciseModel } from 'src/app/core/models/exercise.model';

@Component({
  selector: 'app-exercise-list',
  templateUrl: './exercise-list.component.html',
  styleUrls: ['./exercise-list.component.css']
})
export class ExerciseListComponent implements OnInit{
  exercises: ExerciseModel[]
  subscription: Subscription

  constructor(private router: Router,
    private route: ActivatedRoute){}


    ngOnInit() {}
  
    onNewExercise() {
      this.router.navigate(['new'], {relativeTo: this.route});
    }
  
}
