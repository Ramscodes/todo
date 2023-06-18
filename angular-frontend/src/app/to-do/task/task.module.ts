import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './task-list/task-list.component';
import { MaterialModule } from 'src/app/third-party-libraries/material/material.module';

@NgModule({
  declarations: [TaskListComponent],
  imports: [CommonModule, MaterialModule],
  exports: [TaskListComponent],
})
export class TaskModule {}
