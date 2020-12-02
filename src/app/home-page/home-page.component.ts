import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Todo } from '../../models/todo.model';
import { Guid } from 'guid-typescript';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  @Input() task!: Todo[];

  @Output() addTask = new EventEmitter<string>();

  @Output() deleteTask = new EventEmitter<Guid>();

  @Output() completeTask = new EventEmitter<Guid>();

  newTextToAddToList = '';
 

  constructor() { }

  ngOnInit(): void {
  }
  handleKeyUp(value: string): void {
    this.newTextToAddToList = value;
  }
  addNewTask(): void {
    this.addTask.emit(this.newTextToAddToList);
  }
finishTask(id: Guid): void {
  this.completeTask.emit(id);
}
  onDelete(id: Guid): void {
    this.deleteTask.emit(id);
  }

  toggle(task: any): void {
    task.isComplete = !task.isComplete;
  }
}
