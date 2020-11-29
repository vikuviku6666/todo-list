import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Todo } from '../../models/todo.model';
import { Guid } from 'guid-typescript';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  @Input() task!: Todo;

  @Output() addTask = new EventEmitter<string>();

  @Output() deleteTask = new EventEmitter<Todo>();

  newTextToAddToList = '';
  lineThrough = '';

  constructor() { }

  ngOnInit(): void {
  }
  handleKeyUp(value: string): void {
    this.newTextToAddToList = value;
  }
  addNewTask(): void {
    this.addTask.emit(this.newTextToAddToList);
  }
/*   finishTask(id: Guid): void {
    let todo = this.task.filter(x => x.id === id)[0];
    this.lineThrough = this.lineThrough ? '' : 'line-through';
  } */
  onDelete(todo: Todo): void {
    this.deleteTask.emit(todo);
  }

}
