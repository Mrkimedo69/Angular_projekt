import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

import { TrainingModel } from "../models/training.model";


@Injectable({ providedIn: 'root' })
export class TrainingService{

    trainingChanged = new Subject<TrainingModel[]>();

    private training: TrainingModel[] = [];
  
    constructor() {}
  
    setTraining(training: TrainingModel[]) {
      this.training = training;
      this.trainingChanged.next(this.training.slice());
    }
  
    getTrainings() {
      return this.training.slice();
    }
  
    getTraining(index: number) {
      return this.training[index];
    }

    addTraining(training: TrainingModel) {
      this.training.push(training);
      this.trainingChanged.next(this.training.slice());
    }
  
    updateTraining(index: number, newTraining: TrainingModel) {
      this.training[index] = newTraining;
      this.trainingChanged.next(this.training.slice());
    }
  
    deleteTraining(index: number) {
      this.training.splice(index, 1);
      this.trainingChanged.next(this.training.slice());
    }
  
}