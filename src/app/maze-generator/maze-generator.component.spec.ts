import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MazeGeneratorComponent } from './maze-generator.component';

describe('MazeGeneratorComponent', () => {
  let component: MazeGeneratorComponent;
  let fixture: ComponentFixture<MazeGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MazeGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MazeGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
