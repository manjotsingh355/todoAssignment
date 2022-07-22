import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  newTask = new Task('Title', '', 'Average', '');
  constructor(private router: Router) { }
  imageData: any
  ngOnInit(): void {
  }
  changeFile(event: any) {
    this.newTask.imageString = event.target.files[0].name;
    var reader = new FileReader()
    let onload=(data:any)=>{
      if(typeof reader.result=='string'){
        this.imageData=reader.result;
      }
    }
    reader.onload = onload;
    reader.readAsDataURL(event.target.files[0]);
  }
  saveImageToLocalStorage(){
    localStorage.setItem(this.newTask.imageString,this.imageData);
  }
  goBack(){
    this.router.navigate(['']);
  }
  addTask(){
    let todo=JSON.parse(localStorage.getItem("todo")||"[]");
    todo.push(this.newTask);
    localStorage.setItem("todo",JSON.stringify(todo));
    this.saveImageToLocalStorage();
    this.goBack();
  }
}
