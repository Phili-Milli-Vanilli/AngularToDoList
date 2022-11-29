import { Injectable } from '@angular/core';
import { empty, Observable, of } from 'rxjs';
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

  removeToDoList(index: number){
    todoliste.splice(index, 1);
  }

  addToDoList(inputtext: String){
    todoliste.push(inputtext);
  }

  clearList(){
    todoliste.splice(0);
  }
}