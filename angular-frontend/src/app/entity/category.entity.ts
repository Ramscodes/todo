import { Task } from './task.entity';

export class Category {
  id: number;
  name: string;
  description: string;
  //   tasks: Array<Task>;

  public constructor(id: number, name: string, description: string) {
    this.id = id;
    this.description = description;
    this.name = name;
  }
}
