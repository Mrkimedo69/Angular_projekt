import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

import { ExerciseModel } from "../models/exercise.model";

@Injectable({ providedIn: 'root' })
export class ExerciseToTrainingService{

    private exercise: ExerciseModel[] = [];

    exerciseChanged = new Subject<ExerciseModel[]>();

    pullExercise(exercise: ExerciseModel) {
        this.exercise.pop()
        this.exercise.push(exercise);
        this.exerciseChanged.next(this.exercise.slice());
      }
    
    pushToTraining(){
        return this.exercise[0]
    }

}