<template>
  <component :is="tag" class="section-title" :class="customClass">
    <slot></slot>
  </component>
</template>

<script setup>
defineProps({
  tag: {
    type: String,
    default: 'h2',
  },
  customClass: {
    type: String,
    default: '',
  },
});
</script>

<style lang="scss" scoped>
@use '../global';

.section-title {
  font-family: global.$primary-font;
  font-size: 3rem;

  @media (min-width: 1380px) {
    font-size: 4rem !important;
  }
}
</style>
