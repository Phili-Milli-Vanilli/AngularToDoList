import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { todoliste } from './mock-todoliste';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  constructor() { }

  getToDoList(): Observable<String[]>{
    const  list = of(todoliste);
    return list;
  }
}