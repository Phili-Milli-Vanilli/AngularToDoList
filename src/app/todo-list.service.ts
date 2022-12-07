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


  setTitle(index: number, item: ToDo){
    todoliste[index].title = item.title;
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


  getTopToDo() {
    var list: ToDo[] = [];
    this.getToDoList();
    this.sortByDate();

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
  }


  changeCompleted(index: number){
    if(todoliste[index].completed === true){
      todoliste[index].completed = false;
    }else if(todoliste[index].completed === false){
      todoliste[index].completed = true;
    }
  }

  changeUrgent(index: number){
    if(todoliste[index].urgent === true){
      todoliste[index].urgent = false;
    }else if(todoliste[index].urgent === false){
      todoliste[index].urgent = true;
    }
  }

  changeImportant(index: number){
    if(todoliste[index].important === true){
      todoliste[index].important = false;
    }else if(todoliste[index].important === false){
      todoliste[index].important = true;
    }
  }

  sortByDate(){
    todoliste.sort((n1, n2) => {
      if (n1.targetDate > n2.targetDate) {
        return 1;
      }
  
      if (n1.targetDate < n2.targetDate) {
        return -1;
      }
  
      return 0;
    })
  }

  sortByCompleted(){
    todoliste.sort((n1, n2) => {
      if (n1.completed < n2.completed) {
        return 1;
      }
  
      if (n1.completed > n2.completed) {
        return -1;
      }
  
      return 0;
    })
  }

  sortByUrgent(){
    todoliste.sort((n1, n2) => {
      if (n1.urgent < n2.urgent) {
        return 1;
      }
  
      if (n1.urgent > n2.urgent) {
        return -1;
      }
  
      return 0;
    })
  }

  sortByImportant(){
    todoliste.sort((n1, n2) => {
      if (n1.important < n2.important) {
        return 1;
      }
  
      if (n1.important > n2.important) {
        return -1;
      }
  
      return 0;
    })
  }
}