import { Component, Input, OnInit,} from '@angular/core';
import { ToDo } from '../todo';
import { TodoListService } from '../todo-list.service';
import { Observable,} from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  constructor(private todoListService: TodoListService) { }

  tempList: ToDo[] = [];

  topList: ToDo[] = [];

  ngOnInit(): void {}

  topList$: Observable<ToDo[]> = this.todoListService.getToDoList();

  removeToDoList(index: number) {
    this.topList.splice(index, 1);
  }
}
