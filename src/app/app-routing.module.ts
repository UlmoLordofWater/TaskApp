import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskEditComponent } from './components/task-edit/task-edit.component';
import { TaskAddComponent } from './components/task-add/task-add.component';
import { TaskDetailsComponent } from './components/task-details/task-details.component';

const routes: Routes = [
{
  path: 'list',
  component: TaskListComponent
},
{
  path: '',
  redirectTo: 'list',
  pathMatch: 'full'
},
{
  path: 'add',
  component: TaskAddComponent
},
{
  path: 'edit/:id',
  component: TaskEditComponent
},
{
  path: 'details/:id',
  component: TaskDetailsComponent
}
]

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
