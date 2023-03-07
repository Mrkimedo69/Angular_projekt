import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ExerciseModel } from '../../../../core/models/exercise.model';
import { ExerciseService } from './exercise.service';

describe('ExerciseService', () => {
  let service: ExerciseService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
    service = TestBed.inject(ExerciseService);
    httpMock = TestBed.inject(HttpTestingController);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  afterEach(() => {
    httpMock.verify();
  });

  it('should call addExercise and get response', () =>{
    const exercise: ExerciseModel = {
      id: '',
      exerciseName: '',
      exerciseDescription: '',
      exerciseVideo: '',
      exerciseImage: ''
    }
    service.addExercise(exercise).subscribe((res:ExerciseModel[]) =>{
      expect(res).toBeTruthy()
    })
    const req = httpMock.expectOne('http://localhost:3001/exercise/add')
    expect(req.request.method).toEqual('POST')
  })

  it('should call getExercises', () => {
    service.getExercises().subscribe((res) =>{
      expect(res).toBeTruthy()
    })
     const req = httpMock.expectOne('http://localhost:3001/exercise')
     expect(req.request.method).toEqual('GET')
  })

  it('should call updateExercise and get response', () =>{
    const id = ''
    const exercise: ExerciseModel = {
      id: '',
      exerciseName: '',
      exerciseDescription: '',
      exerciseVideo: '',
      exerciseImage: ''
    }
    service.updateExercise(id,exercise).subscribe((res:ExerciseModel[]) =>{
      expect(res).toBeTruthy()
    })
    const req = httpMock.expectOne('http://localhost:3001/exercise/edit')
    expect(req.request.method).toEqual('PUT')
  })

  describe('setExercise', () =>{
    it('should set current exercises', (() =>{
      const exercises: ExerciseModel [] = [{
        id: '',
        exerciseName: '',
        exerciseDescription: '',
        exerciseVideo: '',
        exerciseImage: ''
      },
      {
        id: '',
        exerciseName: '',
        exerciseDescription: '',
        exerciseVideo: '',
        exerciseImage: ''
      }
      ]
      const spy = jest.spyOn(service, 'setExercise')
      service.setExercise(exercises)
      expect(spy).toHaveBeenCalled()
    }))
  })

})