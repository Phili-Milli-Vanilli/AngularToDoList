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
    ){}

  todolist$: Observable<ToDo[]> = this.todoListService.getToDoList();

  
  ngOnInit(): void{}


  // //Lädt Einträge aus der Json
  // loadData(): void {
  //   this.todolist = [];
  //   this.todoListService.getToDoList().subscribe((data: ToDo[]) => {
  //     this.todolist = data;
  //   }, error => {
  //     console.log('%cERROR: ${error.message}', 'color: red; front-size: 12px;');
  //   }); 
  // }

  // onEditClick(index: number, item: ToDo){
  //   this.canEdit = !this.canEdit;
  //   this.todoListService.setTitle(index, item);
  // }

  // setInput(inputtext: String){
  //   this.input = inputtext;
  //   console.log(this.todolist);
  // }

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
