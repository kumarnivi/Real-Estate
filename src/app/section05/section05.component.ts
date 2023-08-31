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

 
activeButton:string = 'button1';

handleButtonClick(button:string) {
  this.activeButton = button;
  this.changeButtonColors();

}
  changeButtonColors() {
    switch (this.activeButton){
      case 'button1':
      break;
      case 'button2':
      break;
      case 'button3':
        break;
        case 'button4':
      break;
          this.resetButtonColors()
    
  }
}
resetButtonColors() {
   
}




}
