import { BrowserModule, ɵBrowserDomAdapter } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MazeGeneratorComponent } from './maze-generator/maze-generator.component';
import {MdGridListModule} from "@angular/material";
import { AvatarComponent } from './avatar/avatar.component';
import { CellComponent } from './cell/cell.component';

@NgModule({
  declarations: [
    AppComponent,
    MazeGeneratorComponent,
    AvatarComponent,
    CellComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdGridListModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
