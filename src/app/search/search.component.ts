import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from '../todo';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public query:any = '';
  locked: Todo[] =[];
  constructor(private service:TodoService) { }
    ngOnInit(){
    }
    send() {
      
      this.service.callAll().subscribe(resp=>this.locked = resp);
    }
    nothing() {
      this.locked=null;
      this.query = ''
    }
    
}
