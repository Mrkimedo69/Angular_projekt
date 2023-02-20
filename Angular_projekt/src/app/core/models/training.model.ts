import {ExerciseModel} from './exercise.model'

export interface TraningModel{
    exercises: ExerciseModel [],
    setCount: number,
    repCount: number
}