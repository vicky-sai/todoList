import { EventEmitter, Component, OnInit, Input, Output } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-fetch-operator',
  templateUrl: './fetch-operator.component.html',
  styleUrls: ['./fetch-operator.component.css']
})
export class FetchOperatorComponent implements OnInit {

  @Input() srchText: string;
  @Output() operator: EventEmitter<string> = new EventEmitter<string>();
  // response:string;
  todoList:Todo[];
  constructor(private service:TodoService) { }
  ngOnInit() {
  }
  send() {
    console.log('sent');

    this.service.findWord(this.srchText).subscribe(resp=>{this.todoList = resp} );  

    this.operator.emit(); 
      
  }
  

}