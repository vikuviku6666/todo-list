import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addtodo',
  templateUrl: './addtodo.component.html',
  styleUrls: ['./addtodo.component.scss']
})
export class AddtodoComponent implements OnInit {

  constructor() { }
 addNewTodo(valueTodo: string) {
    if (valueTodo) {
      this.todolist.push(valueTodo);
    }
  }
  deleteTodo(valueTodo: string) {

    if (valueTodo) {
      this.todolist = this.todolist.filter();

    }
  }
  ngOnInit(): void {
  }

}
