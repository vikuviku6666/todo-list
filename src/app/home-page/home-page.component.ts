import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
 todolist = [
    'Buy bread',
    'Buy Chicken burger',
    'Learn Angular 5',
    'Make template on Wordpress',
    'Visited Kfc'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
