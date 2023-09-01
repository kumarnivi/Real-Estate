import { Component,HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  radioForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { 

  }

  
  contactForm = new FormGroup({
    name: new FormControl('',[Validators.required, Validators.maxLength(10),Validators.pattern("^[a-zA-Z]+$")]),
    email:new FormControl('',[Validators.required,Validators.email]),
    message:new FormControl('',[Validators.required,Validators.maxLength(200),Validators.pattern("^[a-zA-Z]+$")]),
    sections:new FormControl('',[Validators.required]),
    
  })



  get name(){
    return this.contactForm.get('name')
  }
  
  get email(){
    return this.contactForm.get('email')
  }
  get message(){
    return this.contactForm.get('message')
  }
  get sections(){
    return this.contactForm.get('sections')
  }
  
  
  
  onSubmit(){
    console.log(this.contactForm.value);
    this.contactForm.reset()
    this.radioForm = this.formBuilder.group({
      sections: 'financial-services' // Set default value
    });

    
  }


 
// activeDropdown:number |null =null;

// toggleDropdown(dropdrownNumber:number) {
//   if (this.activeDropdown === dropdrownNumber){
//     this.activeDropdown =null;
//   } else{
//     this.activeDropdown = dropdrownNumber
//   }
// }
 
// isDropdownOpen(dropdrownNumber:number) : boolean {
//   return this.activeDropdown === dropdrownNumber
// }

// @HostListener('window:resize',[$event]){
//   onresize(event:Event) {
//     if (window.innerWidth >= 767) {
//      this.activeDropdown = null
//     }
//   }
// }


 

isMobile!: boolean;
dropdownOpen: boolean[] = [];

footerLinks = [
  {
    title: 'Financial Services',
    icon: 'https://assets.website-files.com/63a1773692843c14b3b68ca0/63a1773692843c2e9ab68d1b_S.svg',
    subLinks: [
      { title: 'Pricing', url: '#' },
      { title: 'Blog', url: '#' }
    ]
  },
  {
    title: 'Real Estate',
    icon: 'https://assets.website-files.com/63a1773692843c14b3b68ca0/63a1773692843c2e9ab68d1b_S.svg',
    subLinks: [
      { title: 'Pricing', url: '#' },
      { title: 'Blog', url: '/real-estate/blog' }
    ]
  },

  {
    title: 'Social media',
    icon: 'https://assets.website-files.com/63a1773692843c14b3b68ca0/63a1773692843c2e9ab68d1b_S.svg',
    subLinks: [
      { title: 'LinkedIn', url: '#' },
     
    ]
  },
  // Add other footer links here
];



ngOnInit() {
  this.checkMobile();
  window.addEventListener('resize', this.checkMobile.bind(this));
 
}

checkMobile() {
  this.isMobile = window.innerWidth <= 768;
}

toggleDropdown(index: number) {
  this.dropdownOpen[index] = !this.dropdownOpen[index];
}

isDropdownOpen(index: number) {
  return this.dropdownOpen[index];
  
}





}
