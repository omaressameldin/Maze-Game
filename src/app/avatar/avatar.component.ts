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
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes
} from '@angular/animations';

import { Cell } from "../classes/cell/cell"

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css'],
  animations: [
    trigger('shakeyshakey', [
      state('SHAKEYSIDES', style({ height: '*' })),
      transition('* => SHAKEYSIDES', [
        style({ height: '*' }),
        animate("0.82s cubic-bezier(.36,.07,.19,.97)", keyframes([
          // style({ transform: 'translate3d(-1px, 0, 0)', offset: 0.1 }),
          // style({ transform: 'translate3d(-1px, 0, 0)', offset: 0.9 }),


          // style({ transform: 'translate3d(2px, 0, 0)', offset: 0.2 }),
          // style({ transform: 'translate3d(2px, 0, 0)', offset: 0.8 }),

          // style({ transform: 'translate3d(-4px, 0, 0)', offset: 0.3 }),
          // style({ transform: 'translate3d(-4px, 0, 0)', offset: 0.5 }),
          // style({ transform: 'translate3d(-4px, 0, 0)', offset: 0.7 }),

          // style({ transform: 'translate3d(4px, 0, 0)', offset: 0.4 }),
          // style({ transform: 'translate3d(4px, 0, 0)', offset: 0.6 })
          style({ transform: 'translate3d(-1px, 0, 0)', offset: 0.1 }),


          style({ transform: 'translate3d(2px, 0, 0)', offset: 0.2 }),

          style({ transform: 'translate3d(-4px, 0, 0)', offset: 0.3 }),
          style({ transform: 'translate3d(4px, 0, 0)', offset: 0.4 }),

          style({ transform: 'translate3d(-4px, 0, 0)', offset: 0.5 }),
          style({ transform: 'translate3d(4px, 0, 0)', offset: 0.6 }),

          style({ transform: 'translate3d(-4px, 0, 0)', offset: 0.7 }),
          style({ transform: 'translate3d(2px, 0, 0)', offset: 0.8 }),

          style({ transform: 'translate3d(-1px, 0, 0)', offset: 0.9 })


        ]))
      ]),
      state('SHAKEYUPP', style({ height: '*' })),
      transition('* => SHAKEYUPP', [
        style({ height: '*' }),
        animate("0.82s cubic-bezier(.36,.07,.19,.97)", keyframes([

          style({ transform: 'translate3d(0, -1px, 0)', offset: 0.1 }),


          style({ transform: 'translate3d(0, 2px, 0)', offset: 0.2 }),

          style({ transform: 'translate3d(0, -4px, 0)', offset: 0.3 }),
          style({ transform: 'translate3d(0, 4px, 0)', offset: 0.4 }),

          style({ transform: 'translate3d(0, -4px, 0)', offset: 0.5 }),
          style({ transform: 'translate3d(0, 4px, 0)', offset: 0.6 }),

          style({ transform: 'translate3d(0, -4px, 0)', offset: 0.7 }),
          style({ transform: 'translate3d(0, 2px, 0)', offset: 0.8 }),

          style({ transform: 'translate3d(0, -1px, 0)', offset: 0.9 })


        ]))
      ]),
      state('SERIOUSLYSHAKEY', style({ height: '*' })),
      transition('* => SERIOUSLYSHAKEY', [style({ height: '*' }),
      animate("3s ease-in", keyframes([

        style({ transform: 'scale(20)', offset: 0.1 }),
        style({ transform: 'skew(30deg,30deg) rotate(180deg)', offset: 0.4 }),
        // style({ transform: 'skewY(20deg)', offset: 0.8 }),
        // style({ transform: '', offset: 0.7 })
      ]))



      ])
    ]
    )]
})

@Directive({
  selector: "[playerAvatar]"
})

export class AvatarComponent implements OnInit {
  size: { width: string, height: string };
  part: any;
  @Input() map: Array<Array<[Cell, boolean, number]>>;
  @Input() gridLocation: { top: number, left: number };
  @Input() startPosition: { x: number, y: number, collectables: number };
  currentPosition: { x: number, y: number };
  currentIsStart: boolean;
  isShakey: String;
  moving: boolean;
  shakeCounter = 0;
  imgSource: String;
  constructor(private el: ElementRef,
    private renderer: Renderer) {
  }

  ngOnInit() {
    this.part = this.el.nativeElement;
    this.currentPosition = { x: 0, y: 0};
    this.currentIsStart = false;
    this.imgSource = "https://upload.wikimedia.org/wikipedia/en/d/d3/Shy_Guy_%28Mario%29.png";

  }

  ngAfterViewChecked() {
    if (typeof this.size === "undefined" || (typeof this.gridLocation === "undefined"))
      return;

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
  }

  onDone($event: any) {
    this.isShakey = "nahh";
    this.imgSource = "https://s3.amazonaws.com/frt-prod/cms/files/files/000/000/069/original/Mario_Pixeles.png";

  }

  @HostListener('document:keyup', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    this.move(event.keyCode)
  }
  move = (keyCode) => {
    if(this.moving)
      return
    let compuStyle = window.getComputedStyle(this.part);
    let origXVal = compuStyle.getPropertyValue("transform").split('(')[1];
    origXVal = origXVal.split(')')[0];
    let origX = origXVal.split(',');
    let width = +this.size.width.split('px')[0] + 1;
    let height = +this.size.height.split('px')[0] + 1;
    switch (keyCode) {
      case (37):
        if (!(this.map[this.currentPosition.y][this.currentPosition.x][0].left)) {
          if (this.shakeCounter == 5) {
            this.isShakey = "SERIOUSLYSHAKEY";
            this.shakeCounter = 0;
            this.imgSource = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwIsh0BcvVCIFndpUlILEEFA5BU7juhHjWH6VBg1QUGsBnARYD";
          }
          else {
            this.isShakey = "SHAKEYSIDES";
            this.shakeCounter++;
          }
          break;
        }
        var newX = +origX[4] - width;
        var oldY = +origX[5];
        this.renderer.setElementStyle(this.part, 'transform', 'translate(' + newX + 'px,' + oldY + 'px)');
        this.currentPosition.x--;
        this.moving = true;
        break;

      case (38):
        if (!(this.map[this.currentPosition.y][this.currentPosition.x][0].up)) {
          if (this.shakeCounter == 5) {
            this.isShakey = "SERIOUSLYSHAKEY";
            this.shakeCounter = 0;
            this.imgSource = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwIsh0BcvVCIFndpUlILEEFA5BU7juhHjWH6VBg1QUGsBnARYD";
          }
          else {
            this.isShakey = "SHAKEYUPP";
            this.shakeCounter++;
          } break;
        }
        var newY = +origX[5] - height;
        var oldX = +origX[4];
        this.renderer.setElementStyle(this.part, 'transform', 'translate(' + oldX + 'px,' + newY + 'px)');
        this.currentPosition.y--;
        this.moving = true;
        break;

      case (39):
        if (!(this.map[this.currentPosition.y][this.currentPosition.x][0].right)) {
          if (this.shakeCounter == 5) {
            this.isShakey = "SERIOUSLYSHAKEY";
            this.shakeCounter = 0;
            this.imgSource = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwIsh0BcvVCIFndpUlILEEFA5BU7juhHjWH6VBg1QUGsBnARYD";
          }
          else {
            this.isShakey = "SHAKEYSIDES";
            this.shakeCounter++;
          } break;
        }
        newX = +origX[4] + width;
        oldY = +origX[5];
        this.renderer.setElementStyle(this.part, 'transform', 'translate(' + newX + 'px,' + oldY + 'px)');
        this.currentPosition.x++;
        this.moving = true
        break;

      case (40):
        if (!(this.map[this.currentPosition.y][this.currentPosition.x][0].down)) {
          if (this.shakeCounter == 5) {
            this.isShakey = "SERIOUSLYSHAKEY";
            this.shakeCounter = 0;
            this.imgSource = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwIsh0BcvVCIFndpUlILEEFA5BU7juhHjWH6VBg1QUGsBnARYD";
          }
          else {
            this.isShakey = "SHAKEYUPP";
            this.shakeCounter++;
          } break;
        }
        newY = +origX[5] + height;
        oldX = +origX[4];
        this.renderer.setElementStyle(this.part, 'transform', 'translate(' + oldX + 'px,' + newY + 'px)');
        this.currentPosition.y++;
        this.moving = true
        break;
    }
     this.renderer.listen(this.part, 'transitionend', (event) => {
        if(this.moving && this.map[this.currentPosition.y][this.currentPosition.x][0].hasCollectable){ 
          this.map[this.currentPosition.y][this.currentPosition.x][0].hasCollectable = false;
          this.startPosition.collectables --;
        }  
        this.moving = false;            
        })    


  }
}
