import { Component, OnInit } from '@angular/core';
import { TaskDataService } from '../../services/task-data.service';
import { Task } from '../../models/task';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {

  myTask: Task;
  id: number;

  onClickDelete(id: number): void {
    this.taskData
    .deleteTask(id)
    .subscribe(t => this.router.navigate(["list"]));
  };

  constructor(
    private taskData: TaskDataService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
    this.route.params.subscribe( params => {
        this.id = +params["id"];
        this.taskData
        .getTaskById(this.id)
        .subscribe(t => (this.myTask = t))
      });
  }
}
