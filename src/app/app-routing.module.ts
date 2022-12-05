import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { AddTodolistComponent } from './add-todolist/add-todolist.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
 // { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  { path: 'todolist', component: TodoListComponent},
  { path: 'add', component: AddTodolistComponent},
  { path: 'dashboard', component: DashboardComponent},
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
