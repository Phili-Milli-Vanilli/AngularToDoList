import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { AppRoutingModule } from './app-routing.module';
import { AddTodolistComponent } from './add-todolist/add-todolist.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    AddTodolistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
