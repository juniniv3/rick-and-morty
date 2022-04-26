import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  searcherParams : {} = {name: '', status: '', gender: '', species: ''};
  constructor() { }

  ngOnInit(): void {
  }

  onFilter(data: {}){
    console.log(data);
    this.searcherParams = data;
  }

}
