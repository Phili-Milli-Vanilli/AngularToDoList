import { Component, Input, ɵisListLikeIterable } from '@angular/core';
import { ToDo } from '../todo';
import { todoliste } from '../mock-todoliste';
import { TodoListService } from '../todo-list.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {


  constructor(
    private todoListService: TodoListService,
  ) { }

  todolist: ToDo[] = [];
  canEdit: Boolean = false;


  @Input() index: number = 0;

  @Input() todo: ToDo = {
    title: '',
    description: '',
    completed: false,
    urgent: false,
    important: false,
    targetDate: 0,
  };

  ngOnInit(): void {
    this.getToDoList();
  }

  onEditClick(index: number, item: ToDo) {
    this.canEdit = !this.canEdit;
    this.todoListService.setTitle(index, item);
  }

  getToDoList() {
    this.todoListService.getToDoList()
      .subscribe(todoliste => this.todolist = todoliste);
  }

  removeToDoList(index: number) {
    this.todoListService.removeToDoList(index);
    this.getToDoList();
  }
}