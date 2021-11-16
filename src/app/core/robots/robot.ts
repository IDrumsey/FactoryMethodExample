import { Artwork } from "../art/artwork";

export abstract class Robot {
    total = 0
    createdArtwork: Artwork[] = []

    // IMPORTANT PART
    abstract makeArt(): Promise<Artwork>
    
    sellArt(piece: Artwork): void {
        console.log("selling art for $", piece.price)
        this.total += piece.price
        piece.sold = true
    }
    
    determinePrice(): number {
        return Math.random()*100
    }
}
