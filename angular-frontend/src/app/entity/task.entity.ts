export class Task {
  id: number;
  name: string;
  description: string;
  categoryId: number;
  completed: boolean;

  // public constructor(init ?: Partial<Task>){
  //     Object.assign(this,init);
  // }

  // public update(init ?: Partial<Task>) : Task{
  //     Object.assign(this,init);
  //     return this;
  // }

  public constructor(
    id: number,
    name: string,
    description: string,
    categoryId: number,
    completed: boolean
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.categoryId = categoryId;
    this.completed = completed;
  }
}
