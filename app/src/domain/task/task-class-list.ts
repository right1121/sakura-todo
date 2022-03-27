import Task from './task-class';

export default class TaskList {
  tasks: Task[] = [];

  constructor(tasks: Task[] = []) {
    this.tasks = tasks;
  }

  push(task: Task) {
    this.tasks.push(task);
  }

  /** 総見積工数(分) */
  get totalManMinutes() {
    return this.calcAllManMinutes();
  }

  /**
   * 総見積工数を計算する
   * @returns 見積工数
   */
  calcAllManMinutes() {
    return this.tasks.reduce((pre, task) => pre + task.manMinutes, 0);
  }
}
