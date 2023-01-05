import { Component, OnInit, } from '@angular/core';
import { ToDo } from '../todo';
import { TodoListService } from '../todo-list.service';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private todoListService: TodoListService,
  ) { }


  todolist$: Observable<ToDo[]> = this.todoListService.getToDoList();
  sortedToDoList$: Observable<ToDo[]> = this.todolist$;

  ngOnInit() {
    this.getTopToDo();
  }

 getTopToDo() {
    this.sortedToDoList$ = this.todolist$
      .pipe(
        map(this.todoListService.sortByDate
        ),
        map(todoliste => {
          var list: ToDo[] = [];


          for (let i = 0; i < todoliste.length; i++) {
            if (list.length < 3) {
              if (todoliste[i].important == true && todoliste[i].completed != true || todoliste[i].urgent == true) {
                list.push(todoliste[i]);
              }
            }
          }
          for (let i = 0; i < todoliste.length; i++) {
            if (list.length < 3) {
              if (todoliste[i].important !== true) {
                list.push(todoliste[i]);
              }
            }
          }
          return list;
        })
      );
  }
}