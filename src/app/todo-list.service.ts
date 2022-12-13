import { Injectable } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { BehaviorSubject, Observable, of, tap } from 'rxjs';
import { todoliste } from './mock-todoliste';
import { ToDo } from './todo';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  static addToDoList(inputext: String) {
    throw new Error('Method not implemented.');
  }

  private serverUrl: String = 'http://localhost:3000';

  todo$ = new BehaviorSubject<ToDo[]>([]);

  constructor(
    private _httpp: HttpClient,
  ) {}

  //Get Abfrage an den JSON Server
  public getToDoList(): Observable<ToDo[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    this._httpp.get<ToDo[]>(this.serverUrl + '/todoliste').subscribe(data => this.todo$.next(data));
    return this.todo$;
  }

  //Post Abfrage an den JSON Server
  addToDoList(item: ToDo): Observable<ToDo[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this._httpp.post<ToDo[]>(this.serverUrl + '/todoliste', item).pipe(tap(() => this.getToDoList()));;
  }

  //Delete Abfrage an den JSON Server
  removeToDoList(item: ToDo) {
    this.getToDoList();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this._httpp.delete<ToDo[]>(this.serverUrl + '/todoliste/' + item.id).pipe(tap(() => this.getToDoList()));
  }

  // getTopList(): Observable<ToDo[]>{
  //   return this._httpp.get<ToDo[]>(this.serverUrl + '/todoliste').pipe(tap(() => this.getTopToDo()));
  // }



  changeCompleted(item: ToDo): Observable<ToDo[]> {
    item.completed = !item.completed;
    if (item.completed) {
      item.important = false;
      item.urgent = false;
    }
    console.log(item);
    return this._httpp.put<ToDo[]>(this.serverUrl + '/todoliste/' + item.id, item).pipe(tap(() => this.getToDoList()));
  }

  changeUrgent(item: ToDo) {
    item.urgent = !item.urgent;
    if (item.urgent && item.completed) {
      item.completed = false;
    }
    return this._httpp.put<ToDo[]>(this.serverUrl + '/todoliste/' + item.id, item).pipe(tap(() => this.getToDoList()));
  }

  changeImportant(item: ToDo) {
    item.important = !item.important;
    if (item.important || item.urgent) {
      item.completed = false;
    }
    return this._httpp.put<ToDo[]>(this.serverUrl + '/todoliste/' + item.id, item).pipe(tap(() => this.getToDoList()));
  }


  getTopToDo(todoliste: ToDo[]) {
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