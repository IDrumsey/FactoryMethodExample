import { Painting } from "../art/painting";
import { Robot } from "./robot";

export class PaintingRobot extends Robot {
    makeArt(): Promise<Painting> {
        return new Promise(res => {
            setTimeout(() => {
                let painting = new Painting(Math.random()*100)
                this.createdArtwork.push(painting)
                res(painting)
            }, Math.random()*5000)
        })
    }
}
