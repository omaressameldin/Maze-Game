import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MazeGeneratorComponent } from './maze-generator/maze-generator.component';
import {MdGridListModule} from "@angular/material";

@NgModule({
  declarations: [
    AppComponent,
    MazeGeneratorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
