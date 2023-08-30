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
    'https://assets.website-files.com/63a1773692843c14b3b68ca0/63a1773692843c786db68d1e_first-p-800.webp',
     'https://assets.website-files.com/63a1773692843c14b3b68ca0/63a1773692843c2bf0b68cf9_second-p-800.webp',
    'https://assets.website-files.com/63a1773692843c14b3b68ca0/63a1773692843ca0a6b68d4c_RE-p-800.webp',
    'https://assets.website-files.com/63a1773692843c14b3b68ca0/63a1773692843c48f7b68d57_fourth%2520RE-p-800.webp'
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
