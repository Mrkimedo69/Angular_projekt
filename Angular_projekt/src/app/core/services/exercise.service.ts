import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { HttpClient } from '@angular/common/http';

import { ExerciseModel } from "../models/exercise.model";


@Injectable({ providedIn: 'root' })
export class ExerciseService{

    exerciseChanged = new Subject<ExerciseModel[]>();

    private exercise: ExerciseModel[] = [];

    exercises: ExerciseModel[]

    exer_field: ExerciseModel
  
    constructor( private http: HttpClient) {
      this.getExercises()
        .subscribe(exercises =>{
          this.exercises = exercises
        })
    }
  
    // getPzzAppointments(): Observable<PzzAppointmentsModule[]> {    
    //   const headers = new HttpHeaders({'Content-Type': 'application/json;charset=UTF-8',
    //     });    return this.http.get<PzzAppointmentsModule[]>(this.rest.getPzzAppointments, {      
    //   headers: headers,      withCredentials: true,    });  }

    setExercise(exercise: ExerciseModel[]) {
      this.exercise = exercise;
      this.exerciseChanged.next(this.exercise.slice());
    }
  
    getExercises():Observable<ExerciseModel[]> {
       return this.http.get<ExerciseModel[]>('http://localhost:3001/exercise');
    }
  
    // getExercise(index: number) {
    //   return this.exercise[index];
    // }
    getExercise(index: number) {
      this.exer_field = this.exercises[index]
      return this.exer_field
   }

    addExercise(exercise: ExerciseModel) {
      this.exercise.push(exercise);
      this.exerciseChanged.next(this.exercise.slice());
    }
  
    updateExercise(index: number, newExercise: ExerciseModel) {
      this.exercises[index] = newExercise;
      this.exerciseChanged.next(this.exercise.slice());
    }
  
    deleteExercise(index: number) {
      this.exercise.splice(index, 1);
      this.exerciseChanged.next(this.exercise.slice());
    }
  
}