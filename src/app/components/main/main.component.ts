import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  searcherParams : {} = {name: '', status: '', gender: '', species: ''};
  constructor() { }

  onFilter(data: {}){
    this.searcherParams = data;
  }

}
