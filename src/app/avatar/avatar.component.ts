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

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})

@Directive({
  selector: "[playerAvatar]"
})

export class AvatarComponent implements OnInit {

  size:any;  
  part:any;
constructor(private el: ElementRef, 
  private renderer: Renderer) {
}

ngOnInit() {
      this.part = this.el.nativeElement.querySelector('.playerAvatar');
      // this.renderer.setElementyStyle(this.part, 'scale')

}

ngAfterViewChecked(){
    console.log("EHHH");
    console.log(this.size);
}
// @HostBinding('style.transform') c_colorrr = "red"; 

@HostListener('document:keyup', ['$event'])
handleKeyboardEvent(event: KeyboardEvent) {
  console.log(event);
  let x = event.keyCode;
  let compuStyle = window.getComputedStyle(this.part);
  let origXVal = compuStyle.getPropertyValue("transform").split('(')[1];
  origXVal = origXVal.split(')')[0];
  let origX = origXVal.split(',');
  let width = +this.size.width.split('px')[0];
  console.log("WIDTH: "+width);
  let height = +this.size.height.split('px')[0];
  switch (x) {
    case (37):
      var newX = +origX[4] - width;
      var oldY = +origX[5];
      this.renderer.setElementStyle(this.part, 'transform', 'translate(' + newX + 'px,' + oldY + 'px)');
      break;

    case (38):
      var newY = +origX[5] - height;
      var oldX = +origX[4];
      this.renderer.setElementStyle(this.part, 'transform', 'translate(' + oldX + 'px,' + newY + 'px)');
      break;


    case (39):
       newX = +origX[4] + width;
       oldY = +origX[5];
      this.renderer.setElementStyle(this.part, 'transform', 'translate(' + newX + 'px,' + oldY + 'px)');
      break;

    case (40):
       newY = +origX[5] + height;
       oldX = +origX[4];
      this.renderer.setElementStyle(this.part, 'transform', 'translate(' + oldX + 'px,' + newY + 'px)');
      break;
  }
}
}
