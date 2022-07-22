import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Task } from '../task';



@Component({
  selector: 'app-chang-list-modal',
  templateUrl: './chang-list-modal.component.html',
  styleUrls: ['./chang-list-modal.component.css']
})
export class ChangListModalComponent implements OnInit {

  todo=[];
  inProgress=[];
  completed=[];
  moveFrom='';
  moveTo='';
  selected='';
  constructor(public dialogRef: MatDialogRef<ChangListModalComponent>,) { }

  ngOnInit(): void {
    this.getItems()
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
  submit(){
    let from=this.select(this.moveFrom);
    let to:Task[]=this.select(this.moveTo);
    let val:Task=new Task(),ind:number=-1;
    console.log(this.selected);
    from.forEach((element:Task,i) => {
      if(element.title==this.selected){
        val=element;
        ind=i;
        return;
      }
    });
    if(ind!=-1){
      
      from.splice(ind,ind+1);
      to.push(val);
    }
    this.setItems(this.todo,this.inProgress,this.completed);
    this.dialogRef.close();
  }
  select(moveFrom:string){
    switch(moveFrom){
      case "toDo":
        return this.todo;
      case "inProgress":
        return this.inProgress;
      case "completed":
        return this.completed;
      default:
        return [];
    }
  }
}
