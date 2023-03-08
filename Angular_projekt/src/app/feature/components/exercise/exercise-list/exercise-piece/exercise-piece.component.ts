import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';

import { ExerciseModel } from 'src/app/core/models/exercise.model';
import { GetExerciseInfo } from '../../store/exercise.action';
import { ExerciseState } from '../../store/exercise.state';

@Component({
  selector: 'app-exercise-piece',
  templateUrl: './exercise-piece.component.html',
  styleUrls: ['./exercise-piece.component.css']
})
export class ExercisePieceComponent implements OnInit{

  @Select(ExerciseState.getExercisesInfo)
  exercises$: Observable<ExerciseModel[]>

  constructor(
    private router: Router,
    private store: Store
    ){}

  exercises: ExerciseModel []

  ngOnInit(){
    this.store.dispatch(new GetExerciseInfo())
    this.exercises$.subscribe((res) => {
      this.exercises = res
    })
    // this.exerciseService.getExercises().subscribe((res) => {
    //   this.exercises = res
    // })
  }

  redirectDetailsExercise(id){
    this.router.navigateByUrl("/exercise/"+id);
  }
}
