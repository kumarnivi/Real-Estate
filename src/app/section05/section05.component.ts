import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section05',
  templateUrl: './section05.component.html',
  styleUrls: ['./section05.component.css'],
})
export class Section05Component implements OnInit {
  ngOnInit(): void {}
  activeContent: number | null = 1
 
 showContent(contentNum:number) {
  this.activeContent =contentNum
 }

 
}
