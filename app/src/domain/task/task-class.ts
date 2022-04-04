// enum TaskStatus {
//   Ready = 0,
//   InProgress = 1,
//   Done = 2,
//   Cancel = 3,
// }
export type TaskStatus = 'Ready' | 'InProgress' | 'Done' | 'Cancel'

export default class Task {
    id: number;

    title: string;

    status: TaskStatus = 'Ready';

    /** 最短工数(分) */
    minManHour;

    /** 最長工数(分) */
    maxManHour;

    /** 実績作業時間(分) */
    actualWork = 0;

    constructor(title: string, minManHour = 0, maxManHour = 0) {
      this.id = Date.now();
      this.title = title;
      this.minManHour = minManHour;
      this.maxManHour = maxManHour;
    }

    /** 見積工数(時間) */
    get manHour() {
      return this.calcManHour();
    }

    /** バッファ */
    get buffer() {
      return this.calcBuffer();
    }

    /**
     * 見積工数を計算する
     * @returns 見積工数
     */
    calcManHour() {
      return this.minManHour + this.calcBuffer();
    }

    /**
     * バッファ時間を計算する
     * @returns バッファ時間
     */
    calcBuffer() {
      return (this.maxManHour - this.minManHour) / 2;
    }

    done() {
      this.status = 'Done';
    }
}
