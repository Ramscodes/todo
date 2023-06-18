import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Task } from 'src/app/entity/task.entity';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  tasks: Task[];
  displayedColumns: string[];
  taskTableDataList!: MatTableDataSource<Task>;
  categoryNum!: number;

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  public constructor(private route: ActivatedRoute) {
    this.tasks = [];
    this.displayedColumns = ['name', 'description', 'action'];
  }
  ngOnInit(): void {
    this.prepareData();
    this.setUpTable();
    this.route.paramMap.subscribe((params) => {
      this.categoryNum = Number(params.get('id'));
    });
  }

  prepareData() {
    const sampleTask = new Task(
      1,
      'Complete Project',
      'Angular and spring boot project',
      1,
      false
    );
    for (let i = 0; i < 10; i++) this.tasks.push(sampleTask);
  }

  setUpTable() {
    this.taskTableDataList = new MatTableDataSource<Task>(this.tasks);
    this.taskTableDataList.paginator = this.paginator;
    this.taskTableDataList.sort = this.sort;
  }
}
