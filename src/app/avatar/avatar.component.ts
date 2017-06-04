import {
  Component,
  OnInit,
  Directive,
  Renderer,
  HostListener,
  HostBinding,
  ElementRef,
  NgModule,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { Cell } from "../classes/cell/cell"

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})

@Directive({
  selector: "[playerAvatar]"
})

export class AvatarComponent implements OnInit {
  size: { width: string, height: string };
  part: any;
  @Input() map: Array<Array<[Cell, boolean]>>;
  @Input() gridLocation: { top: number, left: number };
  @Input() startPosition: { x: number, y: number };
  x: number
  currentPosition: { x: number, y: number };
  currentIsStart: boolean;
  constructor(private el: ElementRef,
    private renderer: Renderer) {
  }

  ngOnInit() {
    this.part = this.el.nativeElement;
    this.currentPosition = { x: 0, y: 0 };
    this.currentIsStart = false;
    // this.currentPosition.y = 0;
    // this.renderer.setElementyStyle(this.part, 'scale')

  }

  ngAfterViewChecked() {
    console.log("EHHH");
    if (typeof this.size === "undefined" || (typeof this.gridLocation === "undefined"))
      return;
    console.log(this.size);
    console.log(this.gridLocation)
    console.log(this.startPosition)
    let width = +this.size.width.split('px')[0]
    let height = +this.size.height.split('px')[0]
    let dimension = this.part.getBoundingClientRect().width
    this.renderer.setElementStyle(this.part, 'left', (this.gridLocation.left + width / 2 - dimension / 2 + this.startPosition.x * (1 + width)) + "px")
    this.renderer.setElementStyle(this.part, 'top', (this.gridLocation.top + height / 2 - dimension / 2 + this.startPosition.y * (1 + height)) + "px")
    if (!this.currentIsStart) {
      this.currentPosition.x = this.startPosition.x;
      this.currentPosition.y = this.startPosition.y;
      this.currentIsStart = true;
    }
    console.log((this.gridLocation.left + width / 2 - dimension / 2 + this.startPosition.x * width))
    console.log((this.gridLocation.top + height / 2 - dimension / 2 + this.startPosition.y * height))
    console.log("omar essam eldin hassan")
    console.log(this.currentPosition)
  }
  // @HostBinding('style.transform') c_colorrr = "red"; 

  @HostListener('document:keyup', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    console.log(event);
    this.move(event.keyCode)
  }
  move = (keyCode) => {
    let compuStyle = window.getComputedStyle(this.part);
    let origXVal = compuStyle.getPropertyValue("transform").split('(')[1];
    origXVal = origXVal.split(')')[0];
    let origX = origXVal.split(',');
    let width = +this.size.width.split('px')[0] + 1;
    console.log("WIDTH: " + width);
    let height = +this.size.height.split('px')[0] + 1;
    switch (keyCode) {
      case (37):
        if (!(this.map[this.currentPosition.y][this.currentPosition.x][0].left))
          break;

        var newX = +origX[4] - width;
        var oldY = +origX[5];
        this.renderer.setElementStyle(this.part, 'transform', 'translate(' + newX + 'px,' + oldY + 'px)');
        this.currentPosition.x--;

        break;

      case (38):
        if (!(this.map[this.currentPosition.y][this.currentPosition.x][0].up))
          break;

        var newY = +origX[5] - height;
        var oldX = +origX[4];
        this.renderer.setElementStyle(this.part, 'transform', 'translate(' + oldX + 'px,' + newY + 'px)');
        this.currentPosition.y--;

        break;


      case (39):
        if (!(this.map[this.currentPosition.y][this.currentPosition.x][0].right))
          break;

        newX = +origX[4] + width;
        oldY = +origX[5];
        this.renderer.setElementStyle(this.part, 'transform', 'translate(' + newX + 'px,' + oldY + 'px)');
        this.currentPosition.x++;

        break;

      case (40):
        if (!(this.map[this.currentPosition.y][this.currentPosition.x][0].down))
          break;

        newY = +origX[5] + height;
        oldX = +origX[4];
        this.renderer.setElementStyle(this.part, 'transform', 'translate(' + oldX + 'px,' + newY + 'px)');
        this.currentPosition.y++;

        break;
    }
  }
}
