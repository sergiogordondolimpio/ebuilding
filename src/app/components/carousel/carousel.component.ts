import { Component } from '@angular/core';
import { CAROUSEL_CONFIG_IMAGES } from 'src/app/data/carousel-config';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {

  imageUrl: string = CAROUSEL_CONFIG_IMAGES[0];
  images: string[] = CAROUSEL_CONFIG_IMAGES;
  count: number = 0;

  nextImage(): void {
    (this.count === this.images.length-1)? this.count=0 : this.count++;
    this.imageUrl = this.images[this.count]
  }

  previousImage(): void {
    (this.count === 0)? this.count=this.images.length-1: this.count--;
    this.imageUrl = this.images[this.count]
  }


}
