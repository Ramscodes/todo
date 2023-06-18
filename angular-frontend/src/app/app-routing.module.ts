import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoryHomeComponent } from './to-do/category/category-home/category-home.component';
import { TaskListComponent } from './to-do/task/task-list/task-list.component';
import { CategoryNewComponent } from './to-do/category/category-new/category-new.component';

const routes: Routes = [
  { path: '', redirectTo: 'category', pathMatch: 'full' },
  {
    path: 'category',
    component: CategoryHomeComponent,
    children: [
      { path: '', component: CategoryNewComponent },
      { path: ':id', component: TaskListComponent },
    ],
  },
  // {
  //   path: 'category/:id',
  //   component: TaskListComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
