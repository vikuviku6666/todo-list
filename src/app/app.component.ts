import { Component } from '@angular/core';
import { Guid } from 'guid-typescript';
import { Todo } from '../models/todo.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todolist: Todo[] = [
    new Todo(Guid.create(), 'Wash Car', false),
    new Todo(Guid.create(), 'Shopping', false),
    new Todo(Guid.create(), 'Pickup Kids', false),
  ];

  constructor() { }

  addTodo(valueTodo: string): void {
    if (valueTodo) {
      const todo = new Todo(Guid.create(), valueTodo, false);
      this.todolist.push(todo);
    }
  }
 deleteTodo(id: Guid): void {
  const todo = this.todolist.filter(x => x.id === id)[0];
  const index = this.todolist.indexOf(todo, 0);
  if (index > -1) {
     this.todolist.splice(index, 1);
   }
  }
}
