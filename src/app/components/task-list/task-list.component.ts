import { Component, OnInit } from '@angular/core';
import { TaskDataService } from '../../services/task-data.service';
import { Task } from '../../models/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  task: Task[];

  getTasks(): void {
    this.taskDataService.getTasks().subscribe(c => (this.task = c));
  }

  deleteTask(id: number): void {
    this.taskDataService.deleteTask(id).subscribe(p => this.getTasks());
  }

  constructor(private taskDataService: TaskDataService) {
    this.taskDataService.getTasks().subscribe(c => (this.task = c));
  }

  ngOnInit() {
    this.getTasks();
  }

}
