import { Component, Input } from '@angular/core';
import { ToDo } from '../todo';
import { TodoListService } from '../todo-list.service';
import { TodoListComponent } from '../todo-list/todo-list.component';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {


  constructor(
    private todoListService: TodoListService,
  ) { }

  canEdit: Boolean = false;

  ngOnInit(): void { }

  @Input() index: number = 0;

  @Input() todo: ToDo = {
    title: '',
    description: '',
    completed: false,
    urgent: false,
    important: false,
    targetDate: 0,
  };

  removeToDoList(item: ToDo) {
    this.todoListService.removeToDoList(item)
      .subscribe();
  }

  changeCompleted(item: ToDo) {
    this.todoListService.changeCompleted(item)
      .subscribe();
  }

  changeUrgent(item: ToDo) {
    this.todoListService.changeUrgent(item)
    .subscribe();
  }

  changeImportant(item: ToDo) {
    this.todoListService.changeImportant(item)
    .subscribe();
  }
}