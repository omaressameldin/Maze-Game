import { Component, OnInit, Input, Renderer2,ElementRef, SimpleChange} from '@angular/core';
import {Cell} from "../classes/cell/cell"

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent implements OnInit {
 @Input() cell: Cell;
 @Input() indexX:number;
 @Input() indexY:number;
 part:any;
  constructor(private el: ElementRef,
    private renderer: Renderer2) { }

  ngOnInit() {
        this.part = this.el.nativeElement;

  }
// ngOnChanges(change:SimpleChange){
//   this.renderer.listen(this.part, 'transitionend', (event) => {
//       this.cell.bottomHit = false;
//       this.cell.leftHit = false;
//       this.cell.rightHit =false;
//       this.cell.topHit = false;
      
//   });
//}

transitionEnd(){
  console.log(this.cell)
        this.cell.bottomHit = false;
      this.cell.leftHit = false;
      this.cell.rightHit =false;
      this.cell.topHit = false;
      console.log(this.cell);
}

}