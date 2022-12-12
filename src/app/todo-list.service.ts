import { Injectable } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Observable, of } from 'rxjs';
import { todoliste } from './mock-todoliste';
import { ToDo } from './todo';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  static addToDoList(inputext: String) {
    throw new Error('Method not implemented.');
  }

  private serverUrl: String = 'http://localhost:3000';

  constructor(
    private _httpp: HttpClient,
  ){}


  setTitle(index: number, item: ToDo) {
    todoliste[index].title = item.title;
  }

  //Get Abfrage an den JSON Server
  public getToDoList(): Observable<ToDo[]> {
    const httpOptions =  {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this._httpp.get<ToDo[]>(this.serverUrl + '/todoliste');
  }

  //Post Abfrage an den JSON Server
  addToDoList(item: ToDo): Observable<ToDo[]>{
    const httpOptions =  {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this._httpp.post<ToDo[]>(this.serverUrl + '/todoliste', item);
  }

  //Delete Abfrage an den JSON Server
  removeToDoList(item: ToDo) {
    this.getToDoList();
    const httpOptions =  {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    console.log(item.id);
    return this._httpp.delete<ToDo[]>(this.serverUrl + '/todoliste/' + item.id)
  }



  changeCompleted(index: number) {
    todoliste[index].completed = !todoliste[index].completed;
    if (todoliste[index].completed) {
      todoliste[index].important = false;
      todoliste[index].urgent = false;
    }
  }

  changeUrgent(index: number){
    todoliste[index].urgent = !todoliste[index].urgent;
    if(todoliste[index].urgent && todoliste[index].completed){
      todoliste[index].completed = false;
    }
  }

  changeImportant(index: number){
    todoliste[index].important = !todoliste[index].important;
    if(todoliste[index].important && todoliste[index].important){
      todoliste[index].completed = false;
    }
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


  sortByDate() {
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

  sortByCompleted() {
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

  sortByUrgent() {
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

  sortByImportant() {
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