import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { ExerciseToTrainingService } from 'src/app/feature/services/exerciseToTraining.service';
import { TrainingService } from 'src/app/feature/services/training.service';

@Component({
  selector: 'app-training-edit',
  templateUrl: './training-edit.component.html',
  styleUrls: ['./training-edit.component.css']
})
export class TrainingEditComponent {
  id: number;
  editMode = false;
  trainingForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private trainingService: TrainingService,
    private router: Router,
    private exerciseToTrainingService: ExerciseToTrainingService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
    });
  }

  onSubmit() {
    if (this.editMode) {
      this.trainingService.updateTraining(this.id, this.trainingForm.value);
    } else {
      this.trainingService.addTraining(this.trainingForm.value);
    }
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  private initForm() {
    let trainingName = '';
    let trainingImage = '';
    let exercises = ''
    // let setCount = '';
    // let repCount = '';


    if (this.editMode) {
      const training = this.trainingService.getTraining(this.id);
      const exercise = this.exerciseToTrainingService.pushToTraining()
      console.log(exercise.exerciseName)
      trainingName = training.trainingName
      trainingImage = training.trainingImage
      exercises = exercise.exerciseName
      // setCount = training.setCount
      // repCount = training.repCount
    }
    this.trainingForm = new FormGroup({
      trainingName: new FormControl(trainingName, Validators.required),
      trainingImage: new FormControl(trainingImage, Validators.required),
      // setCount: new FormControl(setCount, Validators.required),
      // repCount: new FormControl(repCount, Validators.required),
    });
  }
}
