import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  @Output() eventEmit = new EventEmitter<string>();

  filterForm = new FormGroup({
    name: new FormControl(''),
    status: new FormControl(''),
    gender: new FormControl(''),
    species: new FormControl('')
  });
  constructor() { }

  ngOnInit(): void {
  }

  onFilter(){
    this.eventEmit.emit(this.filterForm.value);
  }
}
