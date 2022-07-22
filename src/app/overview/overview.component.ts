import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';
import { ChangListModalComponent } from '../chang-list-modal/chang-list-modal.component';
import { Router } from '@angular/router';
import { Task } from '../task';
@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  constructor(public dialog: MatDialog,private router: Router) { }

  todo:Task[] = [];
  inProgress:Task[] = [];
  completed :Task[]= [];

  ngOnInit(): void {

    // this.setItems([new Task('Get To Work','Get up and Got to work fro the day','Critical'),
    // new Task('Pick up groceries','Go to supermarket and pick groceries','Average')],[
    // new Task('Go home','Go home for the day and take rest.','Critical')],[
    // new Task('Fall asleep','Fall asleep after going home for the new day to begin tomorrow','Critical')])

    
    this.getItems();
  }
  getItems(){
    this.todo=JSON.parse(localStorage.getItem("todo")||"[]");
    this.inProgress=JSON.parse(localStorage.getItem("inProgress")||"[]");
    this.completed=JSON.parse(localStorage.getItem("completed")||"[]");

  }
  setItems(todo:any,inProgress:any,completed:any){
    localStorage.setItem("todo",JSON.stringify(todo));
    localStorage.setItem("inProgress",JSON.stringify(inProgress));
    localStorage.setItem("completed",JSON.stringify(completed));
  }
  changeList(event: CdkDragDrop<any>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
    this.setItems(this.todo,this.inProgress,this.completed);
  }
  openDialog() {
    let dialogRef=this.dialog.open(ChangListModalComponent,{
      width:'50rem'
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getItems();
    });
  }
  toDoFunction=()=>{
    this.router.navigate(['/addTask']);
  }
}
