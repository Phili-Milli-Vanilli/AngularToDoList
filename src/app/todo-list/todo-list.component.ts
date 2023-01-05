import { Component, inject, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
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



  todolist$: Observable<ToDo[]> = this.todoListService.getToDoList();

  sortedToDoList$: Observable<ToDo[]> = this.todolist$;



  ngOnInit(): void {
  }

  sortByDate() {
    this.sortedToDoList$ = this.todolist$
      .pipe(
        map(this.todoListService.sortByDate
        ));
  }

  sortByCompleted() {
    this.sortedToDoList$ = this.todolist$
      .pipe(
        map(this.todoListService.sortByCompleted
        ));
  }

  sortByUrgent() {
    this.sortedToDoList$ = this.todolist$
      .pipe(
        map(this.todoListService.sortByUrgent
        ));
  }

  sortByImportant() {
    this.sortedToDoList$ = this.todolist$
      .pipe(
        map(this.todoListService.sortByImportant
        ));
  }
}
