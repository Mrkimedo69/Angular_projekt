import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { TrainingModel } from 'src/app/feature/models/training.model';

@Component({
  selector: 'app-training-list',
  templateUrl: './training-list.component.html',
  styleUrls: ['./training-list.component.css']
})
export class TrainingListComponent implements OnInit {

  trainings: TrainingModel[];
  subscription: Subscription;

  constructor(
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {}

  onNewTraining() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}
