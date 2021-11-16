import { Component } from '@angular/core';
import { Artwork } from './core/art/artwork';
import { DrawingRobot } from './core/robots/drawing-robot';
import { PaintingRobot } from './core/robots/painting-robot';
import { Robot } from './core/robots/robot';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(){
    this.race(this.goal).then(winner => {
      this.raceDone = true
      if(winner == this.drawingRobot){
        alert("Drawing robot won")
      }
      else{
        alert("Painting robot won")
      }
    })
  }

  goal = 500

  drawingRobot = new DrawingRobot()
  paintingRobot = new PaintingRobot()

  raceDone = false

  race(goal: number): Promise<Robot> {
    return new Promise(res => {
      this.go(this.drawingRobot, goal).then(() => {
        res(this.drawingRobot)
      })
      this.go(this.paintingRobot, goal).then(() => {
        res(this.paintingRobot)
      })
    })
  }

  async go(robot: Robot, goal: number): Promise<void> {
    return new Promise(res => {
      if(this.raceDone){
        console.log("race done stopping")
        res()
      }
      robot.makeArt().then(createdArt => {
        robot.sellArt(createdArt)
        if(robot.total < goal){
          this.go(robot, goal).then(() => {
            res()
          })
        }
        else{
          res()
        }
      })
    })
  }
}
