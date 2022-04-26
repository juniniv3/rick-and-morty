import { Component, EventEmitter, Input, OnInit ,Output } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})

export class PaginatorComponent implements OnInit {
  @Output() eventEmit = new EventEmitter<string>();
  @Input() paginatorNavInfo = {
    currentPage : 1,
    totalPages : 0,
    nextPage: 0,
    prevPage: 0
  }

  private direction = {
    left: "left",
    right: "right"
  }
  constructor() { }

  ngOnInit(): void {
  }

  leftButtonClick(){
    if (this.paginatorNavInfo.prevPage !== 0) {
      this.movePaginatorPosition(this.direction.left)
    }
  }

  rightButtonClick(){
    if (this.paginatorNavInfo.nextPage !== 0) {
      this.movePaginatorPosition(this.direction.right)
    }
  }

  movePaginatorPosition(direction : string ){
    if (direction === this.direction.left) {
      this.eventEmit.emit(String(this.paginatorNavInfo.prevPage));
    } else {
      this.eventEmit.emit(String(this.paginatorNavInfo.nextPage));
    }
  }

}
