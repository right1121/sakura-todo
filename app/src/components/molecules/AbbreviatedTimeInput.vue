<template>
  <input
    class="input"
    type="text"
    placeholder="00:00"
    :value="value"
    onfocus="this.select()"
    @blur="formatTime($event.target.value)"
  >
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({})
export default class AbbreviatedTimeInput extends Vue {
  @Prop({ required: true }) value!: string;

  formatTime(newValue: string) {
    if (newValue === this.value) return;

    const [hour, decimalStr] = newValue.split('.');
    const hourStr = hour ? hour.padStart(2, '0') : '00';
    const decimal = decimalStr ? parseFloat(`0.${decimalStr}`) : 0;
    const minutes = 60 * decimal;
    const minutesStr = String(minutes).padStart(2, '0');
    const value = `${hourStr}:${minutesStr}`;
    this.$emit('input', value);
  }
}
</script>
