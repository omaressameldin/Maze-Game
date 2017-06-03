import { ViewChild, Component, OnInit, Output, EventEmitter, ElementRef, ChangeDetectorRef  } from '@angular/core';
import { Cell } from "../classes/cell/cell"
@Component({
  selector: 'app-maze-generator',
  templateUrl: './maze-generator.component.html',
  styleUrls: ['./maze-generator.component.css']
})
export class MazeGeneratorComponent implements OnInit {

  @Output() update = new EventEmitter<any>();

  @ViewChild('grid') input;
  @ViewChild('avatar') avatar;
  constructor(private el: ElementRef, private cdr: ChangeDetectorRef) { }
  rows: number;
  columns: number;
  dimensions: number;
  map: Array<Array<[Cell, boolean]>>;
  ngOnInit() {
    this.rows = Math.floor(Math.random() * 11) + 5;
    this.columns = Math.floor(Math.random() * 11) + 5;
    this.map = [];
    for (let i = 0; i < this.rows; i++) {
      this.map[i] = [];
      for (let j = 0; j < this.columns; j++) {
        this.map[i][j] = [new Cell(), false];
      }
    }
    this.generateMaze();

  }

  ngAfterViewInit() {
    let part = this.el.nativeElement.querySelector("grid");
    let part2 = this.input._element.nativeElement;
    console.log("BLEH");
    console.log(part);
    console.log(part2);
    console.log(this.input._element.nativeElement);
    let compuStyle = window.getComputedStyle(part2);
    console.log(compuStyle);
    let dim = Math.min(Number(compuStyle.width.match( /\d+/g )[0]), Number(compuStyle.height.match( /\d+/g )[0]));
    this.dimensions =dim;
    this.cdr.detectChanges();
    console.log("omar essam eldin")
    console.log(dim);

  }

  generateMaze() {
    let unvisitedCells = this.rows * this.columns - 1;
    let cellsStack = [];
    let currentCell = [];
    currentCell.push(Math.floor(Math.random() * this.rows));
    currentCell.push(Math.floor(Math.random() * this.columns));
    this.map[currentCell[0]][currentCell[1]][1] = true;
    while (unvisitedCells > 0) {
      let unvisitedNeighbors = this.getUnvisitedNeighbors(currentCell);
      if (unvisitedNeighbors.length > 0) {
        let randomUnvisitedNeighbor = unvisitedNeighbors[Math.floor(Math.random() * unvisitedNeighbors.length)];
        let choosenNeighbor = randomUnvisitedNeighbor == 0 ? [currentCell[0], currentCell[1] - 1] :
          randomUnvisitedNeighbor == 1 ? [currentCell[0] - 1, currentCell[1]] : randomUnvisitedNeighbor == 2 ?
            [currentCell[0], currentCell[1] + 1] : [currentCell[0] + 1, currentCell[1]];
        cellsStack.push(currentCell);
        this.map[currentCell[0]][currentCell[1]][0].removeWall(randomUnvisitedNeighbor);
        this.map[choosenNeighbor[0]][choosenNeighbor[1]][0].removeWall((randomUnvisitedNeighbor + 2) % 4);
        currentCell = choosenNeighbor
        this.map[currentCell[0]][currentCell[1]][1] = true;
        unvisitedCells--;
      }
      else {
        currentCell = cellsStack.pop()
      }
    }
    console.log(this.rows);
    console.log(this.columns);
    console.log(this.map);
  }
  getUnvisitedNeighbors(currentCell: Array<number>): Array<number> {
    let neighbors = [];
    if (currentCell[0] > 0 && !this.map[currentCell[0] - 1][currentCell[1]][1])
      neighbors.push(1) //up
    if (currentCell[0] < this.rows - 1 && !this.map[currentCell[0] + 1][currentCell[1]][1])
      neighbors.push(3) //down    
    if (currentCell[1] > 0 && !this.map[currentCell[0]][currentCell[1] - 1][1])
      neighbors.push(0) //left
    if (currentCell[1] < this.columns - 1 && !this.map[currentCell[0]][currentCell[1] + 1][1])
      neighbors.push(2) //right        
    return neighbors;
  }
}
