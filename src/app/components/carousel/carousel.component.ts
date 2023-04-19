import { Component, Input, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { CAROUSEL_CONFIG_IMAGES } from 'src/app/data/carousel-config';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit{

  imageUrl: string = CAROUSEL_CONFIG_IMAGES[0];
  images: string[] = CAROUSEL_CONFIG_IMAGES;
  count: number = 0;
  @Input() setTimer: boolean = false;
  @Input() segTimer: number = 6000;

  constructor(){
  }
  
  ngOnInit(): void {
    this.timerImage();
  }
  
  timerImage(): void {
    if (this.setTimer) {
      interval(this.segTimer)
        .subscribe(() => {
          this.nextImage()
        }
      )
    }
  }

  nextImage(): void {
    (this.count === this.images.length-1)? this.count=0 : this.count++;
    this.imageUrl = this.images[this.count]
  }

  previousImage(): void {
    (this.count === 0)? this.count=this.images.length-1: this.count--;
    this.imageUrl = this.images[this.count]
  }

  setImage(index: number): void {
    this.count = index;
    this.imageUrl = this.images[this.count];
  }
}
