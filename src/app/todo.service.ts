import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  baseURL:string="http://jsonplaceholder.typicode.com/todos";
  constructor(private http:HttpClient) { }


  callAll(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.baseURL);
  }
  callTrue(): Observable<Todo[]> {

    console.log("call true service ================= fired");

    let trueData = {completed: "true"};
    return this.http.get<Todo[]>(this.baseURL, { params: trueData});
  }
  callFalse(): Observable<Todo[]> {
    let falseData = {completed: "false"};
    return this.http.get<Todo[]>(this.baseURL, { params: falseData});
  }
  // argument should have type
  findWord(srchText): Observable<Todo[]> {
    //console.log(srchText);
    let trueData = {title: srchText};
    return this.http.get<Todo[]>(this.baseURL, { params: trueData}); 
  }
}
