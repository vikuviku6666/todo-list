import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todos/todo.service';
import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-displaytodo',
  templateUrl: './displaytodo.component.html',
  styleUrls: ['./displaytodo.component.scss']
})
export class DisplaytodoComponent implements OnInit {
  public todo: Todo[] = [];
  constructor(private service: TodoService) { }
  ngOnInit(): void {
    this.service.$todo.subscribe((todo) => {
      this.todo = todo;
    });
  }
toggle(task: any): void {
    task.isComplete = !task.isComplete;
  }
}
