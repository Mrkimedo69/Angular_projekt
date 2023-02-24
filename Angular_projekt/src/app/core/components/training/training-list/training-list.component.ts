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
export class TrainingListComponent implements OnInit {

  trainings: TrainingModel[];
  subscription: Subscription;

  constructor(private trainingService: TrainingService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.trainingService.trainingChanged
      .subscribe(
        (trainings: TrainingModel[]) => {
          this.trainings = trainings;
        }
      );
  this.trainingService.getTrainings().subscribe((res) =>{
    this.trainings = res 
  })
  }

  onNewTraining() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}
