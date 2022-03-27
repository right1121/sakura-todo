<template>
  <div>
    <TaskTable
      :taskList="taskList"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TaskTable from '@/components/organisms/task/Table.vue';
import TaskList from '@/domain/task/task-class-list';

@Component({
  components: {
    TaskTable,
  },
})
export default class Tasks extends Vue {
  taskList: TaskList = new TaskList();
}
</script>

<style lang="scss" module>
</style>
