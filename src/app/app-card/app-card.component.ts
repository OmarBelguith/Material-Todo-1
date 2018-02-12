import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-card',
  templateUrl: './app-card.component.html',
  styleUrls: ['./app-card.component.css']
})
export class AppCardComponent implements OnInit {
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

  ngOnInit() { }
}
