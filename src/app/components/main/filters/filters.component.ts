import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl } from '@angular/forms';


@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent {
  @Output() eventEmit = new EventEmitter<string>();

  filterForm = new UntypedFormGroup({
    name: new UntypedFormControl(''),
    status: new UntypedFormControl(''),
    gender: new UntypedFormControl(''),
    species: new UntypedFormControl('')
  });
  constructor() { }

  onFilter(){
    this.eventEmit.emit(this.filterForm.value);
  }
}
