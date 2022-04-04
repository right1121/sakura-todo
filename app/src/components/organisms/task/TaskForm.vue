<template>
  <div>
    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label">タスク名</label>
      </div>
      <div class="field-body">
        <div class="field">
          <ValidationProvider name="タスク名" v-slot="v" rules="required">
            <input class="input" type="text" placeholder="" v-model="title" ref="title">
            <span>{{ v.errors[0] }}</span>
          </ValidationProvider>
        </div>
      </div>
    </div>
    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label">見積り(最小工数/最大工数)</label>
      </div>
      <div class="field-body">
        <div class="field">
          <ValidationProvider name="最小工数" v-slot="v" rules="required">
              <input
                class="input"
                type="number"
                placeholder="1.5(時間)"
                v-model.number="minManHour"
                min="0"
                step="0.25"
                onfocus="this.select()"
              >
            <span>{{ v.errors[0] }}</span>
          </ValidationProvider>
        </div>
        <div class="field">
          <ValidationProvider name="最大工数" v-slot="v" rules="required">
            <input
              class="input"
              type="number"
              placeholder="1.5(時間)"
              v-model.number="maxManHour"
              min="0"
              step="0.25"
              onfocus="this.select()"
            >
            <span>{{ v.errors[0] }}</span>
          </ValidationProvider>
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
import AbbreviatedTimeInput from '@/components/molecules/AbbreviatedTimeInput.vue';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    AbbreviatedTimeInput,
  },
})
export default class TaskForm extends Vue {
  title = '';

  minManHour? = null;

  maxManHour? = null;

  getRefs():any {
    return this.$refs;
  }

  mounted() {
    this.getRefs().title!.focus();
  }

  add() {
    const task = Task.new(this.title, Number(this.minManHour), Number(this.maxManHour));
    this.$emit('addTask', task);
  }
}
</script>
