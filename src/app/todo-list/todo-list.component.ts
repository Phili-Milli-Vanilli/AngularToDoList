import { Component, OnInit } from '@angular/core';
import { todoliste } from '../mock-todoliste';
import { TodoListService } from '../todo-list.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor(private todoListService: TodoListService){}

  todolist: String [] = [];
  input: String = '';

  
  ngOnInit(): void{
    this.getToDoList();
  }

  getToDoList() {
    this.todoListService.getToDoList()
    .subscribe(todoliste => this.todolist = todoliste);
  }

  setInput(inputtext: String){
    this.input = inputtext;
    console.log(this.todolist);
  }

  addToDoList(inputext: String){
    this.todoListService.addToDoList(inputext);
    this.getToDoList();
  }



}
