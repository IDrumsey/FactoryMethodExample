import { Drawing } from "../art/drawing";
import { Robot } from "./robot";

export class DrawingRobot extends Robot {
    makeArt(): Promise<Drawing> {
        return new Promise(res => {
            setTimeout(() => {
                let drawing = new Drawing(Math.random()*100)
                this.createdArtwork.push(drawing)
                res(drawing)
            }, Math.random()*5000)
        })
    }
}
