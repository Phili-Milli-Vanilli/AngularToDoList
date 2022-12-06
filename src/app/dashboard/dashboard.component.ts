import { Component, OnInit, ɵisListLikeIterable } from '@angular/core';
import { ToDo } from '../todo';
import { TodoListService } from '../todo-list.service';
import { todoliste } from '../mock-todoliste';
import { EMPTY, empty, Observable, of } from 'rxjs';
import { TemplateBindingParseResult } from '@angular/compiler';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  constructor(private todoListService: TodoListService) { }

  tempList: ToDo[] = [];

  topList: ToDo[] = [];

  ngOnInit(): void {
    this.getTopToDo();
  }

  getToDoList() {
    this.todoListService.getToDoList()
      .subscribe((todoliste => this.tempList = todoliste));
  }

  changeCompleted(index: number){
    this.todoListService.changeCompleted(index);
  }

    removeToDoList(index: number) {
      this.topList.splice(index, 1);
    }

  getTopToDo(){
    this.topList = this.todoListService.getTopToDo()
  }


  sortByDate() {
    this.tempList.sort((n1, n2) => {
      if (n1.targetDate > n2.targetDate) {
        return 1;
      }

      if (n1.targetDate < n2.targetDate) {
        return -1;
      }

      return 0;
    })
  }

}
