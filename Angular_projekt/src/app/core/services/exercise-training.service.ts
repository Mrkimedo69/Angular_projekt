import { Injectable } from "@angular/core";
import { ReplaySubject } from "rxjs";

import { ExerciseModel } from "../models/exercise.model";

@Injectable({ providedIn: 'root' })
export class ExerciseToTrainingService{

    private exercise: ExerciseModel;

    exerciseChanged = new ReplaySubject<ExerciseModel>();

    pullExercise(exercise: ExerciseModel) {
        this.exercise = exercise
      }
    
    pushToTraining(){
        return this.exercise
    }

}