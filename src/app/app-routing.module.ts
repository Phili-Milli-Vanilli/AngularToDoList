import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { AddTodolistComponent } from './add-todolist/add-todolist.component';


const routes: Routes = [
  { path: '', redirectTo: 'todolist', pathMatch: 'full'},
  { path: 'todolist', component: TodoListComponent},
  { path: 'add', component: AddTodolistComponent},
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
