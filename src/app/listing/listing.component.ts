import { EventEmitter, Component, OnInit, Input, Output } from '@angular/core';
import { TodoService } from '../todo.service';
import { Subscriber } from 'rxjs';
import { Todo } from '../todo';
@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {

  @Input() todoList:Todo[];
  todoListTrue:Todo[];

  constructor(private service:TodoService) { }
  @Input() srchCity: string;
  @Output() operator: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit() {
    this.service.callAll().subscribe(resp=>this.todoList = resp);
  }

  callTrue(){
    console.log("call true component fired");
      this.service.callTrue().subscribe(resp => this.todoList= resp);
  }

  callFalse(){
    console.log("call false component fired");
      this.service.callFalse().subscribe(resp => this.todoList= resp);
  }
  callAll(){
    console.log("call all component fired");
      this.service.callAll().subscribe(resp => this.todoList= resp);
  }  
}
