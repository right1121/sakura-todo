<template>
  <div>
    <TaskForm
      @addTask="addTask"
    />
    <TaskTable
      :taskList="taskList"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TaskTable from '@/components/organisms/task/Table.vue';
import TaskForm from '@/components/organisms/task/TaskForm.vue';
import TaskList from '@/domain/task/task-class-list';
import Task from '@/domain/task/task-class';

@Component({
  components: {
    TaskForm,
    TaskTable,
  },
})
export default class Tasks extends Vue {
  taskList: TaskList = new TaskList();

  addTask(task: Task) {
    this.taskList.push(task);
  }
}
</script>

<style lang="scss" module>
</style>
