import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ExerciseModel } from 'src/app/feature/models/exercise.model';
import { ExerciseService } from 'src/app/feature/services/exercise.service';

@Component({
  selector: 'app-exercise-piece',
  templateUrl: './exercise-piece.component.html',
  styleUrls: ['./exercise-piece.component.css']
})
export class ExercisePieceComponent implements OnInit{

  constructor(
    private exerciseService: ExerciseService,
    private router: Router
    ){}

  exercises: ExerciseModel []

  ngOnInit(){
    this.exerciseService.getExercises().subscribe((res) => {
      this.exercises = res
    })
  }

  redirectDetailsExercise(id){
    this.router.navigateByUrl("/exercise/"+id);
  }
}
