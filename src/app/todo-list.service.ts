import { Injectable } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { empty, Observable, of } from 'rxjs';
import { todoliste } from './mock-todoliste';
import { ToDo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  static addToDoList(inputext: String) {
    throw new Error('Method not implemented.');
  }


  getToDoList(): Observable<ToDo[]> {
    const list = of(todoliste);
    return list;
  }

  removeToDoList(index: number) {
    todoliste.splice(index, 1);
  }

  addToDoList(item: ToDo) {
    todoliste.push(item);
  }

  changeCompleted(index: number){
    if(todoliste[index].completed === true){
      todoliste[index].completed = false;
    }else if(todoliste[index].completed === false){
      todoliste[index].completed = true;
    }
  }

  //   clearList(){
  //    todoliste.splice(0);
  //   }
}