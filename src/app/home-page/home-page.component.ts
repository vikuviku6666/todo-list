import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
 todolist = [
    'Buy bread',
    'Buy Checken burger',
    'Learn Angular 5',
    'Make template on Wordpress',
    'Visited Kfc'
  ];
  addNewTodo(valueTodo: string) {
    if (valueTodo) {
      this.todolist.push(valueTodo);
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
