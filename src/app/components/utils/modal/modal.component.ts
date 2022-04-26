import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Output() eventEmit = new EventEmitter<String>();
  showModal: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  closeModal(){
    this.showModal = false;
    this.eventEmit.emit('');
  }

  clickPreventDefault(event :MouseEvent){
    event.stopPropagation();
  }

}
