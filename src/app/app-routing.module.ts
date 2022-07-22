import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddTaskComponent} from './add-task/add-task.component'
import {OverviewComponent} from './overview/overview.component'
const routes: Routes = [
  {path:'',component:OverviewComponent,pathMatch:"full"},
  { path: 'addTask', component:AddTaskComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
