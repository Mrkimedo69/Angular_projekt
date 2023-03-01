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
  
    constructor(private http: HttpClient) {}
  
    setTraining(training: TrainingModel[]) {
      this.training = training;
      this.trainingChanged.next(this.training.slice());
    }
  
    getTrainings():Observable<TrainingModel[]> {
      return this.http.get<TrainingModel[]>('http://localhost:3001/training');
    }
  
  
    getTraining(id: string) {
      this.training_field = this.trainings[id]
      return this.training_field
   }

    addTraining(training: TrainingModel):Observable<TrainingModel[]> {
      return this.http.post<TrainingModel[]>('http://localhost:3001/training/add',training)
    }
  
    updateTraining(id: string, newTraining: TrainingModel):Observable<TrainingModel[]> {
      return this.http.put<any>('http://localhost:3001/training/edit',{id,newTraining})
    }
  
    deleteTraining(id: number) {
      this.training.splice(id, 1);
      this.trainingChanged.next(this.training.slice());
    }
  
}