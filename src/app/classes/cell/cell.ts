export class Cell {
  left: boolean;
  up: boolean;
  right: boolean;
  down: boolean;
  constructor(){
      this.left = false;
      this.up = false;
      this.right = false;
      this.down = false;
  }
  removeWall(direction:number){
    if(direction == 0)
    this.left = true;
    if(direction == 1)
    this.up = true;
    if(direction == 2)
    this.right = true;
    if(direction == 3)
    this.down = true;
  }
}
