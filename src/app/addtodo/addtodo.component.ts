import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/models/todo.model';
import { TodoService } from '../todos/todo.service';
import { Guid } from 'guid-typescript';

@Component({
  selector: 'app-addtodo',
  templateUrl: './addtodo.component.html',
  styleUrls: ['./addtodo.component.scss']
})
export class AddtodoComponent implements OnInit {

  constructor(private service: TodoService) { }
  newTextToAddToList = 'call';

  handleKeyUp(value: string): void {
    this.newTextToAddToList = value;
  }
  ngOnInit(): void {
    this.getTodo();
  }
 getTodo(): void {
  this.service.getTodo(new Todo(Guid.create(), this.newTextToAddToList, false));
  }
}
