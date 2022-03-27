<template>
  <div class="home">
    <TasksView/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TasksView from '@/components/organisms/TasksView.vue';

@Component({
  components: {
    TasksView,
  },
})
export default class HomeView extends Vue {}
</script>

<style lang="scss" module>
</style>
