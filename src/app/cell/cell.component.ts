import { Component, OnInit, Input} from '@angular/core';
import { Cell } from "../classes/cell/cell"

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent implements OnInit {
  @Input() cell: Cell;
  @Input() indexX: number;
  @Input() indexY: number;
  part: any;
  constructor() { }

  ngOnInit() {

  }

  transitionEnd() {
    this.cell.bottomHit = false;
    this.cell.leftHit = false;
    this.cell.rightHit = false;
    this.cell.topHit = false;
  }

}