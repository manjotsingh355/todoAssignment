import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todoAssignment';
  selected='Home'
  changeSelected(selected:string){
    this.selected=selected;
  }
}
