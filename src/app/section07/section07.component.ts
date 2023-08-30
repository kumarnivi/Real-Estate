import { Component } from '@angular/core';
import { NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-section07',
  templateUrl: './section07.component.html',
  styleUrls: ['./section07.component.css'],
  providers: [NgbAccordionConfig]

})
export class Section07Component {

  // imports components script
  panels: string[] = ['Provide your information', 'Select your location', 'Check Out', 'Access your dashboard'];
  content: string[] = ['Give us some details on yourself and your firm.', 'Provide a zip code and we will provide you with the highest propensity prospects in a 50 mile radius.', 'On the check out page you can select the products and quantity of leads you would like per month.', 'You have immediate access to your dasboard and your leads. From here you can easily track, manage, and export your exclusive leads.'];
  images: string[] = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJOi2pyfg14hb1e3waXJ5mceQkH4froE5TgnVQDkZt&s',
     'https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w=',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJOi2pyfg14hb1e3waXJ5mceQkH4froE5TgnVQDkZt&s',
    'https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'
  ]; // Replace with actual image URLs

  activePanelIndex: number = -1; // Initialize with -1 to indicate no active panel initially
  activeButtonIndex: number = -1; // Initialize with -1 to indicate no active button initially
  currentPanel: string = this.panels[0];
  currentPanelIndex: number = 0;

  constructor(config: NgbAccordionConfig) {
    config.closeOthers = true;
    this.startAutoCycle();
  }

  startAutoCycle() {
    setInterval(() => {
      this.cyclePanel();
    }, 3000); // Change panel every 5 seconds (adjust the interval as needed)
  }


  cyclePanel() {
    const currentIndex = this.panels.indexOf(this.currentPanel);
    const nextIndex = (currentIndex + 1) % this.panels.length;
    this.currentPanel = this.panels[nextIndex];
    this.activePanelIndex = nextIndex; // Update active panel index
  }


  setCurrentPanel(panel: string) {
    this.currentPanel = panel;
    this.currentPanelIndex = this.panels.indexOf(panel);
  }


}
