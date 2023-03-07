import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TrainingModel } from 'src/app/core/models/training.model';
import { TrainingService } from 'src/app/feature/components/training/services/training.service';

@Component({
  selector: 'app-training-bpart',
  templateUrl: './training-bpart.component.html',
  styleUrls: ['./training-bpart.component.css']
})
export class TrainingBpartComponent implements OnInit {

  trainings: TrainingModel[]

  constructor(
    private trainingService: TrainingService,
    private router: Router
    ){}

  ngOnInit(){
    this.trainingService.getTrainings().subscribe((res) => {
      this.trainings = res
    })
  }
  redirectDetailsTraining(id){
    this.router.navigateByUrl("/training/"+id);
  }
}
