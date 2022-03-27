<template>
  <div>
    <TaskTable/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TaskTable from '@/components/organisms/task/Table.vue';

@Component({
  components: {
    TaskTable,
  },
})
export default class Tasks extends Vue {}
</script>

<style lang="scss" module>
</style>
