import { Injectable } from '@angular/core';
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
  

//   getToDoList(): Observable<String[]>{
//     const  list = of(todoliste);
//    return list;
//   }

//   removeToDoList(index: number){
//     todoliste.splice(index, 1);
//   }

  addToDoList(item: ToDo){
   todoliste.push(item);
   console.log(todoliste);
  }

//   clearList(){
//    todoliste.splice(0);
//   }
 }