import { ExerciseModel } from "src/app/core/models/exercise.model"

export class GetExerciseInfo {
    static readonly type = "[Get exercise info] get exercise data"
}

export class AddExercise{
    static readonly type = "[Add exercise] add exercise"
    constructor (public payload: ExerciseModel){}
}
export class EditExercise{
    static readonly type = "[Edit exercise] edit exercise"
    constructor (public payload: ExerciseModel){}
}