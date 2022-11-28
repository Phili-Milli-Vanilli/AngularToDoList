import { Component, OnInit } from '@angular/core';
import { TodoListService } from '../todo-list.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor(private TodoListService: TodoListService){}

  todolist: String [] = [];

  
  ngOnInit(): void{
    this.getToDoList();
  }

  getToDoList() {
    this.TodoListService.getToDoList()
    .subscribe(todoliste => this.todolist = todoliste);
  }


}
