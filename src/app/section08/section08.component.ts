import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { OwlOptions  } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-section08',
  templateUrl: './section08.component.html',
  styleUrls: ['./section08.component.css'],
})
export class Section08Component {
  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: [
      '<i class="fa fa-angle-left  owl-prev" ></i>',
      '<i class="fa fa-angle-right owl-next" ></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 1,
      },
      940: {
        items: 2,
      },
    },
    nav: true,
  };

  // @ViewChild('carousel') private carousel!: ElementRef;

  @ViewChild('carousel') private carousel!: any; // Use OwlCarousel instead of ElementRef

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    // Initialize the Bootstrap carousel
    this.renderer.setProperty(
      this.carousel.nativeElement,
      'data-mdb-ride',
      'carousel'
    );
  }

  // Function to move to the next slide
  moveToNextSlide() {
    this.carousel.nativeElement.querySelector('.carousel-control-next').click();
  }

  // Function to move to the previous slide
  moveToPrevSlide() {
    this.carousel.nativeElement.querySelector('.carousel-control-prev').click();
  }


  //  // Function to move to the next slide
  //  moveToNextSlide() {
  //   this.carousel.next(); // Use ngx-owl-carousel-o's next() method
  // }

  // // Function to move to the previous slide
  // moveToPrevSlide() {
  //   this.carousel.previous(); // Use ngx-owl-carousel-o's previous() method
  // }
}
