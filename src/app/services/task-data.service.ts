import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from '../models/task';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskDataService {

  url: string = 'http://localhost:3000/task';

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.url);
  }

  getTask(id: number): Observable<Task> {
    return this.http.get<Task>(this.url + '/' + id);
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.url, task);
  }

  deleteTask(id: number): Observable<Task> {
    return this.http.delete<Task>(this.url + '/' + id);
  }

  editTask(task: Task): Observable<Task> {
    return this.http.put<Task>(this.url + '/' + task.id, task);
  }

  getTaskById(id: number): Observable<Task> {
    return this.http.get<Task>(this.url + '/' + id)
  }

  constructor(private http: HttpClient) { }
}
