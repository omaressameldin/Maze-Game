import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-avatar-controller',
  templateUrl: './avatar-controller.component.html',
  styleUrls: ['./avatar-controller.component.css']
})

export class AvatarControllerComponent implements OnInit {
@Input() move: any;
  constructor() { }

  ngOnInit() {
  }

}
