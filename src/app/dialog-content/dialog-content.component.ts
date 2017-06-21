import { Component, OnInit, Inject } from '@angular/core';
import { MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
@Component({
  selector: 'app-dialog-content',
  templateUrl: './dialog-content.component.html',
  styleUrls: ['./dialog-content.component.css']
})
export class DialogContentComponent implements OnInit {

  gameOver: boolean;
  failFactor: number;
  constructor(public dialogRef: MdDialogRef<DialogContentComponent>, @Inject(MD_DIALOG_DATA) public data: any, @Inject(MD_DIALOG_DATA) public moves: number) {
    if(data.size)
    this.failFactor = Math.max(Number(0.75*(data.size*data.size)), Number(2*data.collectibles));
}

  ngOnInit() {
    console.log("EH BA2A: " + this.data);
  }

  playAgain() {
    location.reload();
  }
}
