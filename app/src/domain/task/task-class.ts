// enum TaskStatus {
//   Ready = 0,
//   InProgress = 1,
//   Done = 2,
//   Cancel = 3,
// }
type TaskStatus = 'Ready' | 'InProgress' | 'Done' | 'Cancel'

export default class Task {
    id: number;

    title: string;

    status: TaskStatus = 'Ready';

    /** 最短工数(分) */
    minManMinutes;

    /** 最長工数(分) */
    maxManMinutes;

    /** 実績作業時間(分) */
    actualWork = 0;

    constructor(title: string, minManMinutes = 0, maxManMinutes = 0) {
      this.id = Date.now();
      this.title = title;
      this.minManMinutes = minManMinutes;
      this.maxManMinutes = maxManMinutes;
    }

    /** 見積工数(分) */
    get manMinutes() {
      return this.calcManMinutes();
    }

    /** バッファ */
    get buffer() {
      return this.calcBuffer();
    }

    /**
     * 見積工数を計算する
     * @returns 見積工数
     */
    calcManMinutes() {
      return this.minManMinutes + this.calcBuffer();
    }

    /**
     * バッファ時間を計算する
     * @returns バッファ時間(分)
     */
    calcBuffer() {
      return (this.maxManMinutes - this.minManMinutes) / 2;
    }
}
