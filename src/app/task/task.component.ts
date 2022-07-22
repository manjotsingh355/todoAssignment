import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../task';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input() data: Task = new Task()
  constructor() { }

  ngOnInit(): void {
  }
  showImage(imageString: string) {
    let src=localStorage.getItem(imageString);
    if(src==null)return;
    let w = window.open('about:blank');
    let image = new Image();
    image.src = src;
    setTimeout(function () {
      w?.document.write(image.outerHTML);
    }, 0);
  }
}
