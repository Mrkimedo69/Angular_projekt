import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercisePieceComponent } from './exercise-piece.component';

describe('ExercisePieceComponent', () => {
  let component: ExercisePieceComponent;
  let fixture: ComponentFixture<ExercisePieceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExercisePieceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExercisePieceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
