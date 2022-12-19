import { Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ToDo } from '../todo';
import { TodoListService } from '../todo-list.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {



  constructor(
    private todoListService: TodoListService,
  ) { }

  todoliste: ToDo[] = [];
  todolist$: Observable<ToDo[]> = this.todoListService.getToDoList();



  ngOnInit(): void {
  }

  sortByDate() {
    this.todoListService.sortByDate();
  }

  sortByCompleted() {
    this.todoListService.sortByCompleted();
  }

  sortByUrgent() {
    this.todoListService.sortByUrgent();
  }

  sortByImportant() {
    this.todoListService.sortByImportant();
  }
}
