<template>
  <div
    :class="$style.wrap"
    class="is-flex is-flex-direction-row is-align-items-center"
  >
    <div
      @mouseover="focusDoneButton"
      @focus="focusDoneButton"
      @mouseleave="focusOutDoneButton"
      @focusout="focusOutDoneButton"
      class="doneButton cursor-pointer"
    >
      <font-awesome-icon
        :icon="['far', 'circle']"
        v-show="!isOnMouseDoneButton"
      />
      <font-awesome-icon
        :icon="['far', 'circle-check']"
        v-show="isOnMouseDoneButton"
      />
    </div>
    <div :class="$style.id">{{ id }}</div>
    <div :class="$style.title">{{ title }}</div>
    <div :class="$style.space"></div>
    <div :class="$style.manHour">{{ manHour }}時間</div>
    <ActualWorkInput />
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
.wrap {
  width: 100%;
  opacity: 0.7;
  padding: 5px 20px;
  column-gap: .7rem;
}

.id {
  align-items: center;
  flex-shrink: 0;
}
.title {
  flex-shrink: 1;
}
.space {
  flex-grow: 1;
}
</style>
