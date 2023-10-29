import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginatorComponent } from './paginator.component';

describe('PaginatorComponent', () => {
  let component: PaginatorComponent;
  let fixture: ComponentFixture<PaginatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginatorComponent],
    });

    fixture = TestBed.createComponent(PaginatorComponent);
    component = fixture.componentInstance;
  });

  it('should create the PaginatorComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should emit the correct event on leftButtonClick', () => {
    spyOn(component.eventEmit, 'emit');
    component.paginatorNavInfo.prevPage = 2;
    component.leftButtonClick();
    expect(component.eventEmit.emit).toHaveBeenCalledWith('2');
  });

  it('should not emit an event on leftButtonClick when prevPage is 0', () => {
    spyOn(component.eventEmit, 'emit');
    component.paginatorNavInfo.prevPage = 0;
    component.leftButtonClick();
    expect(component.eventEmit.emit).not.toHaveBeenCalled();
  });

  it('should emit the correct event on rightButtonClick', () => {
    spyOn(component.eventEmit, 'emit');
    component.paginatorNavInfo.nextPage = 3;
    component.rightButtonClick();
    expect(component.eventEmit.emit).toHaveBeenCalledWith('3');
  });

  it('should not emit an event on rightButtonClick when nextPage is 0', () => {
    spyOn(component.eventEmit, 'emit');
    component.paginatorNavInfo.nextPage = 0;
    component.rightButtonClick();
    expect(component.eventEmit.emit).not.toHaveBeenCalled();
  });
});
