<template>
  <div
    class="columns is-vcentered is-mobile"
  >
    <div class="column is-1">
      {{ id }}
    </div>
    <div class="column">
      {{ title }}
    </div>
    <div class="column level m-0">
      <div class="level-right">
      </div>
    </div>
    <div class="column is-narrow">
      {{ manHour }}時間
    </div>
    <div class="column is-narrow">
      <ActualWorkInput />
    </div>
    <div class="column is-narrow">
      <button class="button is-small">完了</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import ActualWorkInput from '@/components/molecules/ActualWorkInput.vue';

@Component({
  components: {
    ActualWorkInput,
  },
})
export default class TaskRow extends Vue {
  @Prop({ required: true }) id!: number;

  @Prop({ required: true }) title!: string;

  @Prop({ required: true }) manHour!: string;

  isOnMouseDoneButton = false;

  focusDoneButton() {
    this.isOnMouseDoneButton = true;
  }

  focusOutDoneButton() {
    this.isOnMouseDoneButton = false;
  }
}
</script>

<style lang="scss" module>
</style>
