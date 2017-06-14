import { Component, OnInit, Inject } from '@angular/core';
import {MdDialogRef, MD_DIALOG_DATA} from '@angular/material';
@Component({
  selector: 'app-dialog-content',
  templateUrl: './dialog-content.component.html',
  styleUrls: ['./dialog-content.component.css']
})
export class DialogContentComponent implements OnInit {

  gameOver: boolean;
  constructor(public dialogRef: MdDialogRef<DialogContentComponent>, @Inject(MD_DIALOG_DATA) public data: any) {
   }

  ngOnInit() {
    console.log("EH BA2A: "+this.data);
  }

  playAgain(){
    location.reload();
  }
}
