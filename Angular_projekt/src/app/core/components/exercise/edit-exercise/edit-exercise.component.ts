import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ExerciseService } from 'src/app/core/services/exercise.service';

@Component({
  selector: 'app-edit-exercise',
  templateUrl: './edit-exercise.component.html',
  styleUrls: ['./edit-exercise.component.css']
})
export class EditExerciseComponent implements OnInit {
  id: number;
  editMode = false;
  exerciseForm: FormGroup;

  get ingredientsControls() {
    return (this.exerciseForm.get('exercise') as FormArray).controls;
  }

  constructor(private exerciseService: ExerciseService,
    private router: Router,
    private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.initForm()
    });
  }

  onSubmit() {
    if (this.editMode) {
      this.exerciseService.updateExercise(this.id, this.exerciseForm.value);
    } else {
      this.exerciseService.addExercise(this.exerciseForm.value);
    }
    this.onCancel();
  }



  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  private initForm() {
    let exerciseName = '';
    let exerciseDescription = ''

    if (this.editMode) {
      const exercise = this.exerciseService.getExercise(this.id);
      exerciseName = exercise.exerciseName
      exerciseDescription = exercise.exerciseDescription
    }

    this.exerciseForm = new FormGroup({
      exerciseName: new FormControl(exerciseName, Validators.required),
      exerciseDescription: new FormControl(exerciseDescription, Validators.required),
    });
  }
}
