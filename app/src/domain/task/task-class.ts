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
    minManMinutes = 0;

    /** 最長工数(分) */
    maxManMinutes = 0;

    /** 実績作業時間(分) */
    actualWork = 0;

    constructor(title: string) {
      this.id = Date.now();
      this.title = title;
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
