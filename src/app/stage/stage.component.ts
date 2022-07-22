import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../task';
@Component({
  selector: 'app-stage',
  templateUrl: './stage.component.html',
  styleUrls: ['./stage.component.css']
})
export class StageComponent implements OnInit {

  @Input() title = "";
  @Input() list :Task[]= [];
  @Input() associatdList = [''];

  @Output() event = new EventEmitter<any>;
  @Output() dragAndDrop = new EventEmitter<any>;
  constructor() { }

  ngOnInit(): void {
  }
  changeList(event: any) {
    this.dragAndDrop.emit(event);
  }
  plusClick(){
    this.event.emit();
  }
}
