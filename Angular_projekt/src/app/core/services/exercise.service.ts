import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

import { ExerciseModel } from "../models/exercise.model";


@Injectable({ providedIn: 'root' })
export class ExerciseService{

    exerciseChanged = new Subject<ExerciseModel[]>();

    private exercise: ExerciseModel[] = [];
  
    constructor() {}
  
    setExercise(exercise: ExerciseModel[]) {
      this.exercise = exercise;
      this.exerciseChanged.next(this.exercise.slice());
    }
  
    getExercises() {
      return this.exercise.slice();
    }
  
    getExercise(index: number) {
      return this.exercise[index];
    }

    addExercise(exercise: ExerciseModel) {
      this.exercise.push(exercise);
      this.exerciseChanged.next(this.exercise.slice());
    }
  
    updateExercise(index: number, newExercise: ExerciseModel) {
      this.exercise[index] = newExercise;
      this.exerciseChanged.next(this.exercise.slice());
    }
  
    deleteExercise(index: number) {
      this.exercise.splice(index, 1);
      this.exerciseChanged.next(this.exercise.slice());
    }
  
}