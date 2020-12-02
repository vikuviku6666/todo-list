import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Todo } from '../../models/todo.model';
import { Guid } from 'guid-typescript';


@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todoList: Todo[] = [
    new Todo(Guid.create(), 'Wash Car', false),
    new Todo(Guid.create(), 'Shopping', false),
    new Todo(Guid.create(), 'Pickup Kids', false),
  ];
  private todo = new Subject<Todo[]>();
  $todo = this.todo.asObservable();
  constructor() { }
 getTodo(valueTodo: Todo): void {

      this.todoList.push(valueTodo);
      this.todo.next(this.todoList);

  }
}
