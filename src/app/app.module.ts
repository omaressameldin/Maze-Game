import { BrowserModule, ɵBrowserDomAdapter } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MazeGeneratorComponent } from './maze-generator/maze-generator.component';
import {MdGridListModule} from "@angular/material";
import { AvatarComponent } from './avatar/avatar.component';
import { CellComponent } from './cell/cell.component';
import { AvatarControllerComponent } from './avatar-controller/avatar-controller.component';
import { HammerSwipesDirective } from './directives/hammer-swipes.directive';

@NgModule({
  declarations: [
    AppComponent,
    MazeGeneratorComponent,
    AvatarComponent,
    CellComponent,
    AvatarControllerComponent,
    HammerSwipesDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdGridListModule,
    BrowserAnimationsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
