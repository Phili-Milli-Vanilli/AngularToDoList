import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, tap } from 'rxjs';
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
    private _http: HttpClient,
  ) {}

  public getToDo$(){
    return this.todo$;
  }




  //Get Abfrage an den JSON Server
  public getToDoList(): Observable<ToDo[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    this._http.get<ToDo[]>(this.serverUrl + '/todoliste').subscribe(data => this.todo$.next(data));
    return this.todo$;
  }

  //Post Abfrage an den JSON Server
  addToDoList(item: ToDo): Observable<ToDo> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this._http.post<ToDo>(this.serverUrl + '/todoliste', item).pipe(tap((createdToDo) => this.todo$.next([...this.todo$.value, createdToDo])));
  }

  //Delete Abfrage an den JSON Server
  removeToDoList(item: ToDo) {
    this.getToDoList();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this._http.delete<ToDo[]>(this.serverUrl + '/todoliste/' + item.id).pipe(tap(() => this.getToDoList()));
  }


  changeCompleted(item: ToDo): Observable<ToDo[]> {
    item.completed = !item.completed;
    if (item.completed) {
      item.important = false;
      item.urgent = false;
    }
    return this._http.put<ToDo[]>(this.serverUrl + '/todoliste/' + item.id, item).pipe(tap(() => this.getToDoList()));
  }

  changeUrgent(item: ToDo) {
    item.urgent = !item.urgent;
    if (item.urgent && item.completed) {
      item.completed = false;
    }
    return this._http.put<ToDo[]>(this.serverUrl + '/todoliste/' + item.id, item).pipe(tap(() => this.getToDoList()));
  }

  changeImportant(item: ToDo) {
    item.important = !item.important;
    if (item.important || item.urgent) {
      item.completed = false;
    }
    return this._http.put<ToDo[]>(this.serverUrl + '/todoliste/' + item.id, item).pipe(tap(() => this.getToDoList()));
  }

  sortByDate = (todoliste: ToDo[])=> todoliste.sort((n1, n2) => {
    if (n1.targetDate < n2.targetDate) {
      return -1;
    }

    if (n1.targetDate > n2.targetDate) {
      return 1;
    }

    return 0;
  })

  sortByCompleted = (todoliste: ToDo[])=> todoliste.sort((n1, n2) => {
    if (n1.completed < n2.completed) {
      return 1;
    }

    if (n1.completed > n2.completed) {
      return -1;
    }

    return 0;
  })

  sortByUrgent = (todoliste: ToDo[])=> todoliste.sort((n1, n2) => {
    if (n1.urgent < n2.urgent) {
      return 1;
    }

    if (n1.urgent > n2.urgent) {
      return -1;
    }

    return 0;
  })

  sortByImportant = (todoliste: ToDo[])=> todoliste.sort((n1, n2) => {
    if (n1.important < n2.important) {
      return 1;
    }

    if (n1.important > n2.important) {
      return -1;
    }

    return 0;
  })
  }