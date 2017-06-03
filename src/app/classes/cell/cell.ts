export class Cell {
  left: boolean;
  up: boolean;
  right: boolean;
  down: boolean;
  hasCollectable: boolean;
  constructor(){
      this.left = false;
      this.up = false;
      this.right = false;
      this.down = false;
      if(Math.floor(Math.random() * 5) > 3)
        this.hasCollectable = true;
      else
        this.hasCollectable = true;
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
