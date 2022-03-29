<template>
  <div>
    <div>総見積工数: {{ totalManHour }} 時間</div>
    <draggable :class="$style.tasks" v-model="taskList.tasks" tag="div">
      <transition-group>
        <template v-for="task in tasks">
          <TaskRow
            :key="task.id"
            :id="task.id"
            :title="task.title"
            :minManHour="task.minManHour"
            :maxManHour="task.maxManHour"
            :class="$style.task"
          />
        </template>
      </transition-group>
    </draggable>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import draggable from 'vuedraggable';
import TaskList from '@/domain/task/task-class-list';
import TaskRow from './Row.vue';

@Component({
  components: {
    TaskRow,
    draggable,
  },

})
export default class TasksView extends Vue {
  @Prop({ required: true }) taskList!: TaskList;

  get tasks() {
    return this.taskList.tasks;
  }

  /** 総見積工数(時間) */
  get totalManHour() {
    return this.taskList.totalManHour;
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
