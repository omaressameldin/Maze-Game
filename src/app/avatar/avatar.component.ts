import {
  Component,
  OnInit,
  Directive,
  Renderer2,
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
    trigger('whereChuGoing', [
      state('walking', style({}),
      ),
      transition('* => walking', [
        animate("0.5s linear", keyframes([
          style({ backgroundImage: 'url(assets/mariowalk.png)', offset: 0.3 }),
          style({ backgroundImage: 'url(assets/mariopause.png)', offset: 0.6 }),
          style({ backgroundImage: 'url(assets/mariowalk.png)', offset: 0.8 }),

        ]))
      ]),
      
      state('jumping', style({backgroundImage: 'url(assets/mariojump2.png)'}),
      ),
      transition('* => jumping', [
        animate("0.01s")
      ]),
       state('nowhere', style({backgroundImage: 'url(assets/mariopause.png)'}),
      ),
      transition('* =>nowhere',animate(1))
          ]),
    trigger('shakeyshakey', [
      state('SHAKEYSIDES', style({ height: '*' })),
      transition('* => SHAKEYSIDES', [style({ height: '*' }),
      animate("0.82s cubic-bezier(.36,.07,.19,.97)", keyframes([

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
      ]))

      ])
    ]
    )]
})

export class AvatarComponent implements OnInit {
  size: { width: string, height: string };
  part: any;
  // @Output()  cellBorderHit = new EventEmitter<Array<[number, number, Cell]>>();
  @Input() map: Array<Array<[Cell, boolean, number]>>;
  @Input() gridLocation: { top: number, left: number };
  @Input() startPosition: { x: number, y: number, collectables: number };
  currentPosition: { x: number, y: number };
  currentIsStart: boolean;
  isShakey: String;
  moving: boolean;
  shakeCounter = 0;
  imgSource: String;
  whereTo: String;
  lookingLeft:boolean;
  constructor(private el: ElementRef,
    private renderer: Renderer2) {
  }

  ngOnInit() {
    this.part = this.el.nativeElement;
    this.currentPosition = { x: 0, y: 0 };
    this.currentIsStart = false;
    this.lookingLeft = false;
    this.imgSource = "https://upload.wikimedia.org/wikipedia/en/d/d3/Shy_Guy_%28Mario%29.png";
  }

  ngAfterViewChecked() {
    if (typeof this.size === "undefined" || (typeof this.gridLocation === "undefined"))
      return;

    let width = +this.size.width.split('px')[0]
    let height = +this.size.height.split('px')[0]
    let dimension = this.part.getBoundingClientRect().width
    this.renderer.setStyle(this.part, 'left', (this.gridLocation.left + width / 2 - dimension / 2 + this.startPosition.x * (1 + width)) + "px")
    this.renderer.setStyle(this.part, 'top', (this.gridLocation.top + height / 2 - dimension / 2 + this.startPosition.y * (1 + height)) + "px")
    if (!this.currentIsStart) {
      this.currentPosition.x = this.startPosition.x;
      this.currentPosition.y = this.startPosition.y;
      this.currentIsStart = true;
    }
  }

  onDone($event: any) {
    this.isShakey = "nahh";
    this.imgSource = "https://s3.amazonaws.com/frt-prod/cms/files/files/000/000/069/original/Mario_Pixeles.png";
            this.map[this.currentPosition.y][this.currentPosition.x][0].leftHit = false;
            this.map[this.currentPosition.y][this.currentPosition.x][0].rightHit = false;
            this.map[this.currentPosition.y][this.currentPosition.x][0].topHit = false;
            this.map[this.currentPosition.y][this.currentPosition.x][0].bottomHit = false;


  }


  @HostListener('document:keyup', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    this.move(event)
  }

  swyped(event: any) {
    console.log(event)
    console.log("ANA FE AVATAR YAMMA")
    this.move(event)
  }
  move = (event) => {
    if (this.moving)
      return
    let keyCode = event.keyCode;
    let compuStyle = window.getComputedStyle(this.part);
    let origXVal = compuStyle.getPropertyValue("transform").split('(')[1];
    origXVal = origXVal.split(')')[0];
    let origX = origXVal.split(',');
    let width = +this.size.width.split('px')[0] + 1;
    let height = +this.size.height.split('px')[0] + 1;
    if (keyCode == 37 || event == 'swipeleft') {
      this.lookingLeft = true;
      if (!(this.map[this.currentPosition.y][this.currentPosition.x][0].left)) {
        this.map[this.currentPosition.y][this.currentPosition.x][0].leftHit = true;
        if (this.shakeCounter == 5) {
          this.isShakey = "SERIOUSLYSHAKEY";
          this.shakeCounter = 0;
          this.imgSource = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwIsh0BcvVCIFndpUlILEEFA5BU7juhHjWH6VBg1QUGsBnARYD";
        }
        else {
          this.isShakey = "SHAKEYSIDES";
          this.shakeCounter++;
        }
      }
      else {
        var newX = +origX[4] - width;
        var oldY = +origX[5];
        this.renderer.setStyle(this.part, 'transform', 'translate(' + newX + 'px,' + oldY + 'px)');
        this.whereTo = "walking";
        this.currentPosition.x--;
        this.moving = true;
      }
    }
    else if (keyCode == 38 || event == 'swipeup') {
            this.map[this.currentPosition.y][this.currentPosition.x][0].topHit = true;
      if (!(this.map[this.currentPosition.y][this.currentPosition.x][0].up)) {
        if (this.shakeCounter == 5) {
          this.isShakey = "SERIOUSLYSHAKEY";
          this.shakeCounter = 0;
          this.imgSource = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwIsh0BcvVCIFndpUlILEEFA5BU7juhHjWH6VBg1QUGsBnARYD";
        }
        else {
          this.isShakey = "SHAKEYUPP";
          this.shakeCounter++;
        }
      }
      else {
        var newY = +origX[5] - height;
        var oldX = +origX[4];
        this.renderer.setStyle(this.part, 'transform', 'translate(' + oldX + 'px,' + newY + 'px)');
        this.whereTo = "jumping";
        this.currentPosition.y--;
        this.moving = true;
      }
    }
    else if (keyCode == '39' || event == 'swiperight') {
                  this.map[this.currentPosition.y][this.currentPosition.x][0].rightHit = true;

      this.lookingLeft = false;
      if (!(this.map[this.currentPosition.y][this.currentPosition.x][0].right)) {
        if (this.shakeCounter == 5) {
          this.isShakey = "SERIOUSLYSHAKEY";
          this.shakeCounter = 0;
          this.imgSource = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwIsh0BcvVCIFndpUlILEEFA5BU7juhHjWH6VBg1QUGsBnARYD";
        }
        else {
          this.isShakey = "SHAKEYSIDES";
          this.shakeCounter++;
        }
      }
      else {
        newX = +origX[4] + width;
        oldY = +origX[5];
        this.renderer.setStyle(this.part, 'transform', 'translate(' + newX + 'px,' + oldY + 'px)');
        this.whereTo = "walking";
        this.currentPosition.x++;
        this.moving = true
      }
    }
    else if (keyCode == 40 || event == 'swipedown') {
                        this.map[this.currentPosition.y][this.currentPosition.x][0].bottomHit = true;

      if (!(this.map[this.currentPosition.y][this.currentPosition.x][0].down)) {
        if (this.shakeCounter == 5) {
          this.isShakey = "SERIOUSLYSHAKEY";
          this.shakeCounter = 0;
          this.imgSource = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwIsh0BcvVCIFndpUlILEEFA5BU7juhHjWH6VBg1QUGsBnARYD";
        }
        else {
          this.isShakey = "SHAKEYUPP";
          this.shakeCounter++;
        }
      }
      else {
        newY = +origX[5] + height;
        oldX = +origX[4];
        this.renderer.setStyle(this.part, 'transform', 'translate(' + oldX + 'px,' + newY + 'px)');
        this.currentPosition.y++;
        this.moving = true
      }
    }
    this.renderer.listen(this.part, 'transitionend', (event) => {
      if (this.moving && this.map[this.currentPosition.y][this.currentPosition.x][0].hasCollectable) {
        this.map[this.currentPosition.y][this.currentPosition.x][0].hasCollectable = false;
        this.startPosition.collectables--;
      }
      this.moving = false;
      this.whereTo = "nowhere";
    })


  }
}
