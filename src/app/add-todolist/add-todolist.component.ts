import { Component, Inject, Injectable, InjectionToken, OnInit } from '@angular/core';
import { ToDo } from '../todo';
import { todoliste } from '../mock-todoliste';
import { TodoListService } from '../todo-list.service';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';




@Component({
  selector: 'app-add-todolist',
  templateUrl: './add-todolist.component.html',
  styleUrls: ['./add-todolist.component.css']
})

export class AddTodolistComponent implements OnInit {

  constructor(

    private todoListService: TodoListService,
    private location: Location,
    private dialogRef: MatDialog,

  ) { }

  ngOnInit(): void { }


  //input Objekt Initialisierung
  todo: ToDo = {
    title: '',
    description: '',
    completed: false,
    urgent: false,
    important: false,
    targetDate: 0,
    id: undefined,
  }

  liste: ToDo[] = [];

  addToDoList() {
    this.todoListService.addToDoList(this.todo)
      .subscribe();
    this.resetToDo();
    alert("zur Liste hinzugefügt!");
    console.log(todoliste);
  }

  goBack(): void {
    this.location.back();
  }

  closeAddToDo(){
    this.dialogRef.closeAll();
  }

  resetToDo() {
    this.todo = {
      title: '',
      description: '',
      completed: false,
      urgent: false,
      important: false,
      targetDate: 0,
    };
  }
}

