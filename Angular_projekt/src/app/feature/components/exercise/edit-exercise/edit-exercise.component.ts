import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ExerciseModel } from 'src/app/core/models/exercise.model';

import { ExerciseService } from 'src/app/feature/components/exercise/services/exercise.service';
import { AddExercise, EditExercise, GetExerciseInfo } from '../store/exercise.action';
import { ExerciseState } from '../store/exercise.state';

@Component({
  selector: 'app-edit-exercise',
  templateUrl: './edit-exercise.component.html',
  styleUrls: ['./edit-exercise.component.css']
})
export class EditExerciseComponent implements OnInit {
  id: string;
  editMode = false;
  exerciseForm: FormGroup;
  exercise: ExerciseModel

  @Select(ExerciseState.getExercisesInfo)
  exercises$: Observable<ExerciseModel[]>
  

  constructor(private exerciseService: ExerciseService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private store: Store) {}

  ngOnInit() {
    this.initForm()
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params.id
          this.editMode = params.id != null;
          // this.exerciseService.getExercises().subscribe((res) => {
          // this.exercise = res.find(p => p.id === this.id)
          this.store.dispatch(new GetExerciseInfo())
          this.exercises$.subscribe((res) => {
            this.exercise = res.find(p => p.id === this.id)
          })
         
          // })
        }
      );
  }

  onSubmit() {
    if (this.editMode) {
      this.exerciseService.updateExercise(this.id, this.exerciseForm.value).subscribe();
      this.store.dispatch(new EditExercise(this.exerciseForm.value))
    } else {
      this.store.dispatch(new AddExercise(this.exerciseForm.value))
      // this.exerciseService.addExercise(this.exerciseForm.value).subscribe();
    }
    this.onCancel();
  }



  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  patchExerciseValues(){
      this.exerciseForm.controls['exerciseName'].patchValue(
        this.exercise.exerciseName
      )
      this.exerciseForm.controls['exerciseDescription'].patchValue(
        this.exercise.exerciseDescription
      )
      this.exerciseForm.controls['exerciseImage'].patchValue(
        this.exercise.exerciseImage
      )
      this.exerciseForm.controls['exerciseVideo'].patchValue(
        this.exercise.exerciseVideo
      )
  }
   initForm() {

    // this.exerciseForm = new FormGroup({
    //   exerciseName: new FormControl('', Validators.required),
    //   exerciseDescription: new FormControl('', Validators.required),
    //   exerciseImage: new FormControl('', Validators.required),
    //   exerciseVideo: new FormControl('', Validators.required),
    // });
    this.exerciseForm = this.fb.group({
      exerciseName: ['', Validators.required],
      exerciseVideo: ['', Validators.required],
      exerciseImage: ['', Validators.required],
      exerciseDescription: ['', Validators.required] 
    });


  }
}
