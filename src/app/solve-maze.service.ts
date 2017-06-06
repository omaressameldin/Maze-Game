import { Injectable } from '@angular/core';

@Injectable()
export class SolveMazeService {

  constructor() { }
  solveMaze(startPosition, map):Promise<string[]>{
    let nodes = [{moves: [], x:startPosition.x, y:startPosition.y, collected:[], remaining:startPosition.collectables}]
    while(nodes.length > 0){
      let node = nodes.shift();
      let cell = map[node.y][node.x][0]
      let remaing = node.remaining;
      let collected = node.collected.slice()
      if(cell.hasCollectable && !node.collected.includes(cell)){
        remaing --;
        collected.push(cell)
      }
      if(remaing == 0)
        return Promise.resolve(node.moves);
      if(cell.up){
        let moves = node.moves.slice();
        moves.push("up")
        nodes.push({moves:moves, x:node.x, y: node.y-1, collected:collected.slice(), remaining: remaing})
      }
      if(cell.down){
        let moves = node.moves.slice();
        moves.push("down")        
        nodes.push({moves:moves, x:node.x, y: node.y+1, collected:collected.slice(), remaining: remaing})  
      } 
      if(cell.left){
        let moves = node.moves.slice();
        moves.push("left")        
        nodes.push({moves:moves, x:node.x-1, y: node.y, collected:collected.slice(), remaining: remaing})
      }       
      if(cell.right){
        let moves = node.moves.slice();
         moves.push("right")   
        nodes.push({moves:moves, x:node.x+1, y: node.y, collected:collected.slice(), remaining: remaing}) 
      }                   
    }
  }
}
