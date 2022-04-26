import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  gitHubURL = "https://github.com/juniniv3/rick-and-morty";
  constructor() { }

  ngOnInit(): void {
  }

  goToGithub(){
    window.open(this.gitHubURL,"_blank")
  }

}
