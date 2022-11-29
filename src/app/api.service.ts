import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private Http:HttpClient) { }

  fetchTodos = () => {
    return this.Http.get("https://jsonplaceholder.typicode.com/todos")
  }
}
