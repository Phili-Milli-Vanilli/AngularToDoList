import { Component, inject, OnInit } from '@angular/core';
import { todoliste } from '../mock-todoliste';
import { ToDo } from '../todo';
import { TodoListService } from '../todo-list.service';
import { AddTodolistComponent } from '../add-todolist/add-todolist.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {


  constructor(
    private todoListService: TodoListService,
    ){}

  todolist: ToDo [] = [];
  canEdit: Boolean = false;

  
  ngOnInit(): void{
    this.getToDoList();
  }

  onEditClick(index: number, item: ToDo){
    this.canEdit = !this.canEdit;
    this.todoListService.setTitle(index, item);
  }

  getToDoList() {
    this.todoListService.getToDoList()
    .subscribe(todoliste => this.todolist = todoliste);
  }

  // setInput(inputtext: String){
  //   this.input = inputtext;
  //   console.log(this.todolist);
  // }

  removeToDoList(index: number){
    this.todoListService.removeToDoList(index);
    this.getToDoList();
  }

  // addToDoList(inputtext: String){
  //   this.todoListService.addToDoList(inputtext);
  //   this.getToDoList();
  // }

  // clearList(){
  //   this.todoListService.clearList();
  //   this.getToDoList();
  // }

  sortByDate(){
    this.todoListService.sortByDate();
  }

  sortByCompleted(){
    this.todoListService.sortByCompleted();
  }

  sortByUrgent(){
    this.todoListService.sortByUrgent();
  }

  sortByImportant(){
    this.todoListService.sortByImportant();
  }
}
