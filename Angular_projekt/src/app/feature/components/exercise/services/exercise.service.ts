import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { ExerciseModel } from "src/app/core/models/exercise.model";
import { OnInit } from "@angular/core";


@Injectable({ providedIn: 'root' })
export class ExerciseService implements OnInit{

    exerciseChanged = new Subject<ExerciseModel[]>();

    private exercise: ExerciseModel[] = [];

    exercises: ExerciseModel[]

    exer_field: ExerciseModel
    id: string
  
    constructor( private http: HttpClient,
      private route: ActivatedRoute) {}

    ngOnInit() {
      this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params.id
    })
  }
  
    setExercise(exercise: ExerciseModel[]) {
      this.exercise = exercise;
      this.exerciseChanged.next(this.exercise.slice());
    }
  
    getExercises():Observable<ExerciseModel[]> {
       return this.http.get<ExerciseModel[]>('http://localhost:3001/exercise');
    }

  //   getExercise(id: string) {
  //     this.exer_field = this.exercises[id]
  //     return this.exer_field
  //  }

    addExercise(exercise: ExerciseModel):Observable<ExerciseModel[]> {
      return this.http.post<ExerciseModel[]>('http://localhost:3001/exercise/add',exercise)

    }
  
    updateExercise(id: string, newExercise: ExerciseModel):Observable<ExerciseModel[]> {
      console.log(this.id)
      return this.http.put<any>('http://localhost:3001/exercise/edit',{id,newExercise})
    }
  
    deleteExercise(index: number) {
      this.exercise.splice(index, 1); 
      this.exerciseChanged.next(this.exercise.slice());
    }
  
}