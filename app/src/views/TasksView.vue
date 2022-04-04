<template>
  <div>
    <div class="modal is-active" v-if="showAddForm">
      <button class="modal-background" @click="showAddForm = false"></button>
      <div class="modal-content">
        <div class="box">
          <TaskForm
            @addTask="addTask"
          />
        </div>
      </div>
      <button class="modal-close is-large" aria-label="close" @click="showAddForm = false"></button>
    </div>
    <button class="button" @click="showAddForm = true">追加</button>
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

  showAddForm = false;

  addTask(task: Task) {
    this.$store.dispatch('pushTask', task);
    this.taskList.push(task);
    this.showAddForm = false;
  }
}
</script>

<style lang="scss" module>
</style>
