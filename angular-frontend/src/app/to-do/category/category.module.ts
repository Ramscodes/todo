import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryHomeComponent } from './category-home/category-home.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { TaskModule } from '../task/task.module';
import { MaterialModule } from 'src/app/third-party-libraries/material/material.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { CategoryNewComponent } from './category-new/category-new.component';

@NgModule({
  declarations: [CategoryHomeComponent, CategoryListComponent, CategoryNewComponent],
  imports: [CommonModule, TaskModule, MaterialModule, AppRoutingModule],
  exports: [CategoryHomeComponent],
})
export class CategoryModule {}
