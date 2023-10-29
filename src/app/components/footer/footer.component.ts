import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  gitHubURL = "https://github.com/juniniv3/rick-and-morty";
  constructor() { }

  goToGithub(){
    window.open(this.gitHubURL,"_blank")
  }

}
