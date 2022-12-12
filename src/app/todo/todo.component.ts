import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
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
    private todoListCompoment: TodoListComponent,
  ) { }

  canEdit: Boolean = false;

  ngOnInit(): void { }

  @Input() todo$ = new Observable<ToDo[]>();

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

  changeCompleted(index: number) {
    this.todoListService.changeCompleted(index);
  }

  changeUrgent(index: number) {
    this.todoListService.changeUrgent(index);
  }

  changeImportant(index: number) {
    this.todoListService.changeImportant(index);
  }

  onEditClick(index: number, item: ToDo) {
    this.canEdit = !this.canEdit;
    this.todoListService.setTitle(index, item);
  }
}