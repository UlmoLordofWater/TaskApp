import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TaskDataService } from '../../services/task-data.service';
import { Task } from '../../models/task';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent implements OnInit {

  tasks: Task[];

  editTask: Task = new Task();

  saveTask() {
    this.taskDataService.editTask(this.editTask).subscribe(c => this.router.navigate(["list"]));
  }

  constructor(private taskDataService: TaskDataService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      param => {
      this.taskDataService
      .getTask(+param['id'])
      .subscribe(p => (this.editTask = p));
    });
  }

}
