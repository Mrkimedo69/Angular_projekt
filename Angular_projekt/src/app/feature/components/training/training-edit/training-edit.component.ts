import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { TrainingModel } from 'src/app/core/models/training.model';

import { TrainingService } from 'src/app/feature/components/training/services/training.service';

@Component({
  selector: 'app-training-edit',
  templateUrl: './training-edit.component.html',
  styleUrls: ['./training-edit.component.css']
})
export class TrainingEditComponent {
  id: string;
  editMode = false;
  trainingForm: FormGroup;
  training: TrainingModel

  constructor(
    private route: ActivatedRoute,
    private trainingService: TrainingService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params.id
          this.editMode = params.id != null;
          this.trainingService.getTrainings().subscribe((res) => {
            this.training = res.find(p => p.id === this.id)
          })
        }
      );
      this.initForm()
  }

  onSubmit() {
    if (this.editMode) {
      this.trainingService.updateTraining(this.id, this.trainingForm.value).subscribe();
    } else {
      this.trainingService.addTraining(this.trainingForm.value).subscribe();
    }
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  patchTrainingValues(){
    this.trainingForm.controls['trainingName'].patchValue(
      this.training.trainingName
    )
    this.trainingForm.controls['trainingImage'].patchValue(
      this.training.trainingImage
    )
}
  private initForm() {

    this.trainingForm = this.fb.group({
      trainingName: ['', Validators.required],
      trainingImage: ['', Validators.required]
    });

  }
}
