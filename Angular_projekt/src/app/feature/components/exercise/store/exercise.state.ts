import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { tap } from "rxjs/operators";
import { ExerciseModel } from "src/app/core/models/exercise.model";
import { ExerciseService } from "../services/exercise.service";
import { AddExercise, EditExercise, GetExerciseInfo } from "./exercise.action";


interface ExerciseStateModel {
    exercise: ExerciseModel[]
}

@State<ExerciseStateModel>({
    name: "exerciseStateModel",
    defaults:{
        exercise: [{
            id: "",
            exerciseName: "",
            exerciseDescription: "",
            exerciseVideo: "",
            exerciseImage: "" 
        }]

    }
})

@Injectable()
export class ExerciseState{

    constructor(private exerciseService: ExerciseService){}

    @Selector()
    static getExercisesInfo(state: ExerciseStateModel){
        return state.exercise
    }

    @Action(GetExerciseInfo)
    getExercisesInfo(ctx: StateContext<ExerciseStateModel>){
        const state = ctx.getState()
        return this.exerciseService.getExercises().pipe(
            tap((res) => {
                ctx.patchState({exercise: res})
            })
        )
    }

    @Action(AddExercise)
    addExercise({getState,patchState}: StateContext<ExerciseStateModel>, {payload}: AddExercise){
       const state = getState()
       patchState({
        exercise: [...state.exercise,payload]
       }) 
       return this.exerciseService.addExercise(payload)
    }
    @Action(EditExercise)
    editExercise({getState,patchState}: StateContext<ExerciseStateModel>, payload: EditExercise){
       const state = getState()
        return this.exerciseService.updateExercise(payload.id,payload.payload)
    //    return this.exerciseService.updateExercise(payload)
    }

}