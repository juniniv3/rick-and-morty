import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  linkedinURL = "https://www.linkedin.com/in/luis-jes%C3%BAs-fl%C3%B3rez-moreno-54a34b180/";
  constructor() { }

  ngOnInit(): void {
  }
  goToLinkedin(){
    window.open(this.linkedinURL,"_blank")
  }
}
