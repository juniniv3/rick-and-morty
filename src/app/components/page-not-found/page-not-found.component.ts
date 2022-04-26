import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

  message = 'Al parecer llegaste a un lugar desconocido!'
  constructor() { }

  ngOnInit(): void {
  }

}
