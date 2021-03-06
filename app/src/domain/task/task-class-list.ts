import Task from './task-class';

export default class TaskList {
  tasks: Task[] = [];

  constructor(tasks: Task[] = []) {
    this.tasks = tasks;
  }

  push(task: Task) {
    this.tasks.push(task);
  }

  done(task: Task) {
    task.done();
    this.tasks = this.tasks.slice().map((t) => {
      if (t.id === task.id) {
        return task;
      }
      return t;
    });
  }

  /** 総見積工数(分) */
  get totalManHour() {
    return this.calcAllManHour();
  }

  /**
   * 総見積工数を計算する
   * @returns 見積工数
   */
  calcAllManHour() {
    return this.tasks.reduce((pre, task) => pre + task.manHour, 0);
  }
}
