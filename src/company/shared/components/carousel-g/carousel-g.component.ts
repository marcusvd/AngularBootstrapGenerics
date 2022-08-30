import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'carousel-g',
  templateUrl: './carousel-g.component.html',
  styleUrls: ['./carousel-g.component.scss']
})
export class CarouselGComponent implements OnInit {


  itemsPerSlide = 3;
  singleSlideOffset = false;
  noWrap = false;

  slides: {image: string; text?: string}[] = [ {image: '../../../../assets/carousel-index/1.jpg'},
    {image: '../../../../assets/carousel-index/2.jpg'},
    {image: '../../../../assets/carousel-index/3.png'}];

    onSlideRangeChange(indexes: number[]|void): void {
      this.slidesChangeMessage = `Slides have been switched: ${indexes}`;
    }

    slidesChangeMessage = '';




  constructor(

  ) {
  }


  ngOnInit(): void {
  }

}
