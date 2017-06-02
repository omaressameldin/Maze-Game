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

 size:Object;
  
constructor(private el: ElementRef, 
  private renderer: Renderer) {
}

ngOnInit() {
}

ngAfterViewInit(){
    console.log("EHHH");

    console.log(this.size);

}
// @HostBinding('style.transform') c_colorrr = "red"; 

@HostListener('document:keyup', ['$event'])
handleKeyboardEvent(event: KeyboardEvent) {
  console.log(event);
  let x = event.keyCode;
  let part = this.el.nativeElement.querySelector('.playerAvatar');
  let compuStyle = window.getComputedStyle(part);
  let origXVal = compuStyle.getPropertyValue("transform").split('(')[1];
  origXVal = origXVal.split(')')[0];
  let origX = origXVal.split(',');
  
  switch (x) {
    case (37):
      var newX = +origX[4] - 50;
      var oldY = +origX[5];
      this.renderer.setElementStyle(part, 'transform', 'translate(' + newX + 'px,' + oldY + 'px)');
      break;

    case (38):
      var newY = +origX[5] - 50;
      var oldX = +origX[4];
      this.renderer.setElementStyle(part, 'transform', 'translate(' + oldX + 'px,' + newY + 'px)');
      break;


    case (39):
      var newX = +origX[4] + 50;
      var oldY = +origX[5];
      this.renderer.setElementStyle(part, 'transform', 'translate(' + newX + 'px,' + oldY + 'px)');
      break;

    case (40):
      var newY = +origX[5] + 50;
      var oldX = +origX[4];
      this.renderer.setElementStyle(part, 'transform', 'translate(' + oldX + 'px,' + newY + 'px)');
      break;
  }
}
}
