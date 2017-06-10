export class Cell {
  left: boolean;
  up: boolean;
  right: boolean;
  down: boolean;
  leftHit: boolean;
  rightHit: boolean;
  topHit: boolean;
  bottomHit: boolean;
  hasCollectable: boolean;
  constructor(){
      this.left = false;
      this.up = false;
      this.right = false;
      this.down = false;
      this.leftHit = false;
      this.rightHit = false;
      this.topHit = false;
      this.bottomHit = false;
      if(Math.floor(Math.random() * 7) > 5)
        this.hasCollectable = true;
      else
        this.hasCollectable = false;
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
