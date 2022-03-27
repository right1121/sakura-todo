<template>
  <div>
    <div>総見積工数: {{ totalManMinutes }} 分</div>
    <draggable :class="$style.tasks" v-model="tasks" tag="div">
      <transition-group>
        <template v-for="task in tasks">
          <TaskRow
            :key="task.id"
            :id="task.id"
            :title="task.title"
            :class="$style.task"
          />
        </template>
      </transition-group>
    </draggable>
    <div class="field">
      <label htmlFor="title" for="title" class="label">タイトル</label>
      <div class="control">
        <input class="input is-small" type="text" id="title" v-model="title">
      </div>
    </div>
    <button class="button" @click="addTask">追加</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import draggable from 'vuedraggable';
import Task from '@/domain/task/task-class';
import TaskList from '@/domain/task/task-class-list';
import TaskRow from './Row.vue';

@Component({
  components: {
    TaskRow,
    draggable,
  },

})
export default class TasksView extends Vue {
  taskList: TaskList = new TaskList();

  title = '';

  get tasks() {
    return this.taskList.tasks;
  }

  /** 総見積工数(分) */
  get totalManMinutes() {
    return this.taskList.totalManMinutes;
  }

  private addTask() {
    this.tasks.push(new Task(
      this.title,
    ));
    this.formReset();
  }

  private formReset() {
    this.title = '';
  }
}
</script>

<style lang="scss" module>
.task {
  border-bottom-style: solid;
  border-bottom-color: rgb(211, 211, 211);
  border-bottom-width: 1px;
}
</style>
