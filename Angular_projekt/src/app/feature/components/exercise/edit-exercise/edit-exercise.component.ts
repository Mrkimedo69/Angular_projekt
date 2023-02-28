import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ExerciseModel } from 'src/app/feature/models/exercise.model';

import { ExerciseService } from 'src/app/feature/services/exercise.service';

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
  

  constructor(private exerciseService: ExerciseService,
    private router: Router,
    private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params.id
          this.editMode = params.id != null;
          this.exerciseService.getExercises().subscribe((res) => {
            this.exercise = res.find(p => p.id === this.id)
          })
        }
      );
      this.initForm()
  }

  onSubmit() {
    if (this.editMode) {
      this.exerciseService.updateExercise(this.id, this.exerciseForm.value).subscribe((res)=>{
        console.log(res)
      });
    } else {
      this.exerciseService.addExercise(this.exerciseForm.value).subscribe((res) =>{
        console.log(res)
      });
    }
    this.onCancel();
  }



  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  private initForm() {
    let exerciseName = '';
    let exerciseDescription = ''
    let exerciseImage = ''
    let exerciseVideo = ''

    if (this.editMode) {
      const exercise = this.exercise;
      exerciseName = exercise.exerciseName
      exerciseDescription = exercise.exerciseDescription
      exerciseImage = exercise.exerciseImage
      exerciseVideo= exercise.exerciseVideo
     }

    this.exerciseForm = new FormGroup({
      exerciseName: new FormControl(exerciseName, Validators.required),
      exerciseDescription: new FormControl(exerciseDescription, Validators.required),
      exerciseImage: new FormControl(exerciseImage, Validators.required),
      exerciseVideo: new FormControl(exerciseVideo, Validators.required),
    });
  }
}
