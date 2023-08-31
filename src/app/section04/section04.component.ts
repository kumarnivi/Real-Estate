import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section04',
  templateUrl: './section04.component.html',
  styleUrls: ['./section04.component.css']
})
export class Section04Component implements OnInit {
  

  constructor() {}

  ngOnInit(): void {
    this.initializeSmoothScrolling();
  }
  
  initializeSmoothScrolling() {
    const columns = document.querySelectorAll('.scroll-column');
    columns.forEach((column, index) => {
      column.addEventListener('scroll', () => {
        const scrollPercentage = (column.scrollLeft / column.scrollWidth) * 100;
        if (scrollPercentage >= 50 && index < columns.length - 1) {
          columns[index + 1].scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'start'
          });
        }
      });
    });
  }

}
