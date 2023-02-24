import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

import { TrainingModel } from "../models/training.model";


@Injectable({ providedIn: 'root' })
export class TrainingService{

    trainingChanged = new Subject<TrainingModel[]>();

    private training: TrainingModel[] = [];

    trainings: TrainingModel[]

    training_field: TrainingModel
  
    constructor(private http: HttpClient) {
      this.getTrainings()
        .subscribe(trainings =>{
          this.trainings = trainings
        })
    }
  
    setTraining(training: TrainingModel[]) {
      this.training = training;
      this.trainingChanged.next(this.training.slice());
    }
  
    getTrainings():Observable<TrainingModel[]> {
      return this.http.get<TrainingModel[]>('http://localhost:3001/training');
    }
  
  
    // getTraining(index: number) {
    //   return this.training[index];
    // }
    getTraining(index: number) {
      this.training_field = this.trainings[index]
      return this.training_field
   }

    addTraining(training: TrainingModel):Observable<TrainingModel[]> {
      this.training.push(training);
      this.trainingChanged.next(this.training.slice());
      console.log(this.training)
      return this.http.post<TrainingModel[]>('http://localhost:3001/training',this.training)
    }
  
    updateTraining(index: number, newTraining: TrainingModel):Observable<TrainingModel[]> {
      this.trainings[index] = newTraining;
      this.trainingChanged.next(this.training.slice());
      return this.http.put<TrainingModel[]>('http://localhost:3001/training/:id',this.trainings[index])
    }
  
    deleteTraining(index: number) {
      this.training.splice(index, 1);
      this.trainingChanged.next(this.training.slice());
    }
  
}