import { BrowserModule } from '@angular/platform-browser';
import { NgModule, } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskAddComponent } from './components/task-add/task-add.component';
import { TaskEditComponent } from './components/task-edit/task-edit.component';
import { TaskNavComponent } from './components/task-nav/task-nav.component';
import { TaskDetailsComponent } from './components/task-details/task-details.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskAddComponent,
    TaskEditComponent,
    TaskNavComponent,
    TaskDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
