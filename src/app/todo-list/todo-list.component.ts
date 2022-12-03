import { Component, OnInit } from '@angular/core';
import { todoliste } from '../mock-todoliste';
import { ToDo } from '../todo';
import { TodoListService } from '../todo-list.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor(private todoListService: TodoListService){}

  todolist: ToDo [] = [];
  input: String = '';
  
  ngOnInit(): void{
    this.getToDoList();
  }

  getToDoList() {
    this.todoListService.getToDoList()
    .subscribe(todoliste => this.todolist = todoliste);

    // for(let i = 0; i < this.todolist.length; i++){
    //   if(todoliste.at(i)?.completed == true){
    //     this.todolist.at(i)?.completed. = 'Done!';
    //   }
    //   else{
    //     console.log('Java ist besser');
    //   }
    // }
  }

  // setInput(inputtext: String){
  //   this.input = inputtext;
  //   console.log(this.todolist);
  // }

  // removeToDoList(index: number){
  //   this.todoListService.removeToDoList(index);
  //   console.log(todoliste);
  //   console.log(index);
  //   this.getToDoList();
  // }

  // addToDoList(inputtext: String){
  //   this.todoListService.addToDoList(inputtext);
  //   this.getToDoList();
  // }

  // clearList(){
  //   this.todoListService.clearList();
  //   this.getToDoList();
  // }


}
