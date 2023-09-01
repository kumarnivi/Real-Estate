import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { SwiperModule } from 'swiper/types/shared';
@Component({
  selector: 'app-section08',
  templateUrl: './section08.component.html',
  styleUrls: ['./section08.component.css']
})
export class Section08Component  {
 
  @ViewChild('carousel') private carousel!: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    // Initialize the Bootstrap carousel
    this.renderer.setProperty(this.carousel.nativeElement, 'data-mdb-ride', 'carousel');
  }

  // Function to move to the next slide
  moveToNextSlide() {
    this.carousel.nativeElement.querySelector('.carousel-control-next').click();
  }

  // Function to move to the previous slide
  moveToPrevSlide() {
    this.carousel.nativeElement.querySelector('.carousel-control-prev').click();
  }

  
}