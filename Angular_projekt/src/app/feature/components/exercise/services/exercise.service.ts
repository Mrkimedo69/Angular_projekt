import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { HttpClient } from '@angular/common/http';

import { ExerciseModel } from "src/app/core/models/exercise.model";


@Injectable({ providedIn: 'root' })
export class ExerciseService{

    exerciseChanged = new Subject<ExerciseModel[]>();

    private exercise: ExerciseModel[] = [];

    exercises: ExerciseModel[]

    exer_field: ExerciseModel
  
    constructor( private http: HttpClient) {}
  
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
      return this.http.put<any>('http://localhost:3001/exercise/edit',{id,newExercise})
    }
  
    deleteExercise(index: number) {
      this.exercise.splice(index, 1); 
      this.exerciseChanged.next(this.exercise.slice());
    }
  
}