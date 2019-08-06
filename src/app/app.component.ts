import { Component } from '@angular/core';
import { Navigation } from './navigation';

//import { Weather } from './weather';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo List';
  links : Navigation[] = [
    {text:'All',link:'http://jsonplaceholder.typicode.com/todos'},
    {text:'Done',link:'http://jsonplaceholder.typicode.com/todos'},
    {text:'Not done',link:'http://jsonplaceholder.typicode.com/todos'}
  ]; 
}
