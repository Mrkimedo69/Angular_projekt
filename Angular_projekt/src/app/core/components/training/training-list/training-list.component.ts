import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { TrainingModel } from 'src/app/core/models/training.model';
import { TrainingService } from 'src/app/core/services/training.service';

@Component({
  selector: 'app-training-list',
  templateUrl: './training-list.component.html',
  styleUrls: ['./training-list.component.css']
})
export class TrainingListComponent implements OnInit, OnDestroy {

  trainings: TrainingModel[];
  subscription: Subscription;

  constructor(private trainingService: TrainingService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.subscription = this.trainingService.trainingChanged
      .subscribe(
        (trainings: TrainingModel[]) => {
          this.trainings = trainings;
        }
      );
    this.trainings = this.trainingService.getTrainings();
  }

  onNewTraining() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
