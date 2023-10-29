import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit , OnDestroy {
  @Output() eventEmit = new EventEmitter<String>();
  showModal: boolean = true;
  constructor() { }

  ngOnInit(): void {
    this.toggleBodyHtmlOverflow(true);
  }

  closeModal(){
    this.showModal = false;
    this.eventEmit.emit('');
    this.toggleBodyHtmlOverflow(false);
  }

  clickPreventDefault(event :MouseEvent){
    event.stopPropagation();
  }

  toggleBodyHtmlOverflow(hidden: boolean = true){
    const body = document.querySelector('body');
    const overflowValue = hidden ? 'hidden' : '';
    body?.style.setProperty('overflow',overflowValue)
  }

  ngOnDestroy(): void {
    this.toggleBodyHtmlOverflow(false);
  }
}
