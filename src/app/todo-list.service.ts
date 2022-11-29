import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { todoliste } from './mock-todoliste';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  static addToDoList(inputext: String) {
    throw new Error('Method not implemented.');
  }

  constructor() { }

  getToDoList(): Observable<String[]>{
    const  list = of(todoliste);
    return list;
  }

  addToDoList(inputext: String){
    todoliste.push(inputext);
  }
}