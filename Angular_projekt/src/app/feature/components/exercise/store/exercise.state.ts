import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { tap } from "rxjs/operators";
import { ExerciseModel } from "src/app/core/models/exercise.model";
import { ExerciseService } from "../services/exercise.service";
import { GetExerciseInfo } from "./exercise.action";


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

}