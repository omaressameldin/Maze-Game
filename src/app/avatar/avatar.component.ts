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
  @Input() currentPosition: { x: number, y: number };

  constructor(private el: ElementRef,
    private renderer: Renderer) {
  }

  ngOnInit() {
    this.part = this.el.nativeElement;

    // this.renderer.setElementyStyle(this.part, 'scale')

  }

  ngAfterViewChecked() {
    console.log("EHHH");
    if (typeof this.size === "undefined" || (typeof this.gridLocation === "undefined"))
      return;
    console.log(this.size);
    console.log(this.gridLocation)
    console.log(this.currentPosition)
    let width = +this.size.width.split('px')[0]
    let height = +this.size.height.split('px')[0]
    let dimension = this.part.getBoundingClientRect().width
    this.renderer.setElementStyle(this.part, 'left', (this.gridLocation.left + width / 2 - dimension / 2 + this.currentPosition.x * (1 + width)) + "px")
    this.renderer.setElementStyle(this.part, 'top', (this.gridLocation.top + height / 2 - dimension / 2 + this.currentPosition.y * (1 + height)) + "px")
    console.log((this.gridLocation.left + width / 2 - dimension / 2 + this.currentPosition.x * width))
    console.log((this.gridLocation.top + height / 2 - dimension / 2 + this.currentPosition.y * height))
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
          return;

        var newX = +origX[4] - width;
        var oldY = +origX[5];
        this.renderer.setElementStyle(this.part, 'transform', 'translate(' + newX + 'px,' + oldY + 'px)');
                  this.currentPosition.x--;

        break;

      case (38):
       if (!(this.map[this.currentPosition.y][this.currentPosition.x][0].up))
            return;
         
        var newY = +origX[5] - height;
        var oldX = +origX[4];
        this.renderer.setElementStyle(this.part, 'transform', 'translate(' + oldX + 'px,' + newY + 'px)');
                  this.currentPosition.y--;

        break;


      case (39):
      if (!(this.map[this.currentPosition.y][this.currentPosition.x][0].right))
            return;
          
        newX = +origX[4] + width;
        oldY = +origX[5];
        this.renderer.setElementStyle(this.part, 'transform', 'translate(' + newX + 'px,' + oldY + 'px)');
                 this.currentPosition.x++;

        break;

      case (40):
       if (!(this.map[this.currentPosition.y][this.currentPosition.x][0].down))
            return;
         
        newY = +origX[5] + height;
        oldX = +origX[4];
        this.renderer.setElementStyle(this.part, 'transform', 'translate(' + oldX + 'px,' + newY + 'px)');
                 this.currentPosition.y++;

        break;
    }
    }
  }
