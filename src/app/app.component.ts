import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddTodolistComponent } from './add-todolist/add-todolist.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDo-Liste';

  constructor(private dialogRef: MatDialog){}

  openAddToDo(){
    this.dialogRef.open(AddTodolistComponent);
  }
}
