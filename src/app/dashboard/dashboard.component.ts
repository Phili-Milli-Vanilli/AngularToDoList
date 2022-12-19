import { Component, Input, OnInit, } from '@angular/core';
import { ToDo } from '../todo';
import { TodoListService } from '../todo-list.service';
import { Observable, } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  constructor(
    private todoListService: TodoListService,
  ) { }

  todolist$ = new Observable<ToDo[]>();


  
  ngOnInit(){
    this.todolist$ = this.todoListService.getToDoList();
  }

  }
