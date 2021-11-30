import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Serve1Service {
  public employees=[
    {"name":"Do Assigment","id":"Complete","dept":" Nov 12"},
    {"name":"Study for exams","id":"Incomplete","dept":"Nov 20"},
    {"name":"Learn New Language","id":"Incomplete","dept":"30 Dec"}
  ]
getEmployee(){
  return this.employees
}

  constructor() { }
}
