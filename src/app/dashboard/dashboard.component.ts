import { Component, OnInit, ɵisListLikeIterable } from '@angular/core';
import { ToDo } from '../todo';
import { TodoListService } from '../todo-list.service';
import { todoliste } from '../mock-todoliste';
import { EMPTY, empty, Observable, of } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  constructor(private todoListService: TodoListService) { }

  tempList: ToDo[] = [];

  ngOnInit(): void {
    this.getToDoList();
    this.getSortedList();
    console.log(this.tempList);
    console.log(todoliste);
  }

  getToDoList() {
    this.todoListService.getToDoList()
      .subscribe((todoliste => this.tempList = todoliste));
  }

  getSortedList(){
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
