import { Component, inject, Injectable, InjectionToken } from '@angular/core';
import { ToDo } from '../todo';
import { todoliste } from '../mock-todoliste';
import { Title } from '@angular/platform-browser';
import { TodoListComponent } from '../todo-list/todo-list.component';
import { TodoListService } from '../todo-list.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-add-todolist',
  templateUrl: './add-todolist.component.html',
  styleUrls: ['./add-todolist.component.css']
})

export class AddTodolistComponent {

  constructor(
    private toDolistSerive: TodoListService,
    private location: Location
    ){}

  ngOnInit(): void{}

  todo: ToDo = {
    title: '',
    description: '',
    completed: false,
    urgent: false,
    important: false,
    targetDate: 0,
  }  

  addList(){

    //this.item = this.todo;
    this.toDolistSerive.addToDoList(this.todo);
  }

  goBack(): void {
    this.location.back();
  }

  
}

