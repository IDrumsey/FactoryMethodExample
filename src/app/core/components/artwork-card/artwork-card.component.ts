import { Component, Input, OnInit } from '@angular/core';
import { Artwork } from '../../art/artwork';

@Component({
  selector: 'app-artwork-card',
  templateUrl: './artwork-card.component.html',
  styleUrls: ['./artwork-card.component.scss']
})
export class ArtworkCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() artwork: Artwork

  get cardStyles(): {} {
    return {
      backgroundColor: this.artwork.sold ? "#62fcc7" : "#f55b81"
    }
  }
}
