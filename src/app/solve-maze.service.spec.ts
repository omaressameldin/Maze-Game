import { TestBed, inject } from '@angular/core/testing';

import { SolveMazeService } from './solve-maze.service';

describe('SolveMazeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SolveMazeService]
    });
  });

  it('should be created', inject([SolveMazeService], (service: SolveMazeService) => {
    expect(service).toBeTruthy();
  }));
});
