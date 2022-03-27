<template>
  <div>
    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label">タスク名</label>
      </div>
      <div class="field-body">
        <div class="field">
          <input class="input" type="text" placeholder="" v-model="title">
        </div>
      </div>
    </div>
    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label">見積り(最小工数/最大工数)</label>
      </div>
      <div class="field-body">
        <div class="field">
          <input class="input" type="number" placeholder="最小工数" v-model.number="minManMinutes">
        </div>
        <div class="field">
          <input class="input" type="number" placeholder="最大工数" v-model.number="maxManMinutes">
        </div>
      </div>
    </div>
    <div class="field is-grouped is-grouped-right">
      <button class="button is-primary" @click="add">
        追加
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Task from '@/domain/task/task-class';
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class TaskForm extends Vue {
  title = '';

  minManMinutes!: number;

  maxManMinutes!: number;

  add() {
    const task = new Task(this.title, this.minManMinutes, this.maxManMinutes);
    this.$emit('addTask', task);
  }
}
</script>
