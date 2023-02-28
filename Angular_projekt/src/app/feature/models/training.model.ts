import {ExerciseModel} from './exercise.model'

export interface TrainingModel{
    //exercises: ExerciseModel [],
    id: string,
    trainingName: string,
    trainingImage: string,
    setCount?: number,
    repCount?: number
}